function greet(name: string): string{
    return `Hello ${name}`;
}

console.log(greet("Sanjeev"));

// 1. basic
/*
console.log(greet(24)); 
//console.log(greet(24)); => This will also run and print 24 because, at the end runs javascript only.

*/

// 2. How it works
/*
    basic.ts -> lexer -> parser -> binder -> checker -> emmiter -> .js,.d.ts,.map

    lexer's work is generally tokenizeing

    usually parser and blinder doesn't exit in any other language except typescript.

    emitter just generate the .js, .d.ts, .mpa file
*/