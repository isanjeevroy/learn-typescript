/*
    frist command is: npm init -y
    second command is: npm i -D typescript
    third command is: npx tsc --init (to initialize and generate the tsconfig.json file)
    fourth command is: npx tsc (this generate the code in the dis file(.ts,.d.ts,.js files))

    but at the end js files go to production
    for that we need to run "node dist/index.js => production"
    for dev just run typescript "npx tsc"
*/

function greet(username: string): string{
    return `Hello ${username}`
}

const name: string = "Sanjeev"

console.log(greet(name))