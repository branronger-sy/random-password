# random-password
A simple and powerful JavaScript Password Generator that allows you to create secure passwords based on your own rules — length, uppercase/lowercase letters, numbers, symbols, and even mandatory inclusion of each category.
Perfect for web projects, signup forms, developer tools, or as a small standalone utility.
# Features
- Adjustable password length.
- Enable or disable uppercase letters, lowercase letters, numbers, and symbols.
- Enforce at least one character from each selected category.
- Option to exclude similar characters (like l, 1, I, 0, O).
- Support for custom character sets.
- Works in both browser and Node.js environments.
- Simple, lightweight, and dependency-free.
# How It Works
The script provides a main function:

    let lengthmin=12;//or another min value
    let lengthmax=15;//or another max value
    let up=true;//or false if you want password without Uppercase
    let lo=true;//or false if you want password without Lowercase
    let num=true;//or false if you want password without numbers.
    let symb=true;//or false if you want password without symbols.
    password=randpassword(lengthmin,lengthmax,up,lo,num,symb);

Where options is an object containing generation rules (length, allowed sets, minimum counts, etc.).
It validates your configuration, builds the allowed character pool, ensures inclusion rules, and produces a fully randomized secure password.
