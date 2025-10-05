function randpassword(lengthmin,lengthmax,up,lo,num,symb){
    let upletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let loletters=upletters.toLowerCase();
    let numletters="0123456789";
    let symbletters="_#$@%(){[]}'&=+-*/!$^ ";
    let autorised="";
    let password="";
    autorised+=up?upletters:'';
    autorised+=lo?loletters:'';
    autorised+=num?numletters:'';
    autorised+=symb?symbletters:'';
    let length=Math.round(Math.random()*(lengthmax - lengthmin))+lengthmin;
    for(let i=0;i<length;i++){
        password+=autorised.charAt(Math.round(Math.random()*(autorised.length-1)));
    }
    if(up && !/[A-Z]/.test(password))
    return randpassword(lengthmin,lengthmax,up,lo,num,symb);
    else if(lo && !/[a-z]/.test(password))
    return randpassword(lengthmin,lengthmax,up,lo,num,symb);
    else if(num && !/[0-9]/.test(password))
    return randpassword(lengthmin,lengthmax,up,lo,num,symb);
    else if(symb && !/[ _#\$@%()\{\}\[\}'&=\+\-\*\/!\$^]/.test(password))
    return randpassword(lengthmin,lengthmax,up,lo,num,symb);
    else return password;
}