# 🚀 The Complete TypeScript Learning Roadmap

Welcome! 👋

This repository contains everything I learned while studying **TypeScript** , starting from the absolute basics and gradually moving toward advanced concepts.

The goal of this repository is to make TypeScript easy to understand for everyone, even if you have never written TypeScript before.

---

# 📚 What You'll Learn

This repository follows a step-by-step learning path.

```
JavaScript Basics
        │
        ▼
Introduction to TypeScript
        │
        ▼
Basic Types
        │
        ▼
Variables & Type Inference
        │
        ▼
Arrays & Objects
        │
        ▼
Functions
        │
        ▼
Type Aliases & Interfaces
        │
        ▼
Union Types
        │
        ▼
Type Narrowing
        │
        ▼
Enums & Tuples
        │
        ▼
Generics
        │
        ▼
Advanced Types
        │
        ▼
Modules
        │
        ▼
React + TypeScript
        │
        ▼
Industry Best Practices
```

---

# 📖 Learning Roadmap

## 1️⃣ Introduction

Learn:

- What is TypeScript?
- Why TypeScript?
- JavaScript vs TypeScript
- Installing TypeScript
- Running TypeScript
- Compiling TypeScript
- tsconfig.json

Example

```ts
let name = "Sanjeev";
```

---

## 2️⃣ Basic Types

Learn all built-in data types.

- number
- string
- boolean
- null
- undefined
- bigint
- symbol

Example

```ts
let age: number = 22;
let username: string = "Sanjeev";
let isStudent: boolean = true;
```

---

## 3️⃣ Variables

Learn

- let
- const
- var
- Type Inference
- Explicit Types

Example

```ts
let city = "Hyderabad";

let country: string = "India";
```

---

## 4️⃣ Arrays

Learn

- Number Arrays
- String Arrays
- Boolean Arrays
- Mixed Arrays
- Readonly Arrays

Example

```ts
let numbers: number[] = [1,2,3];
```

---

## 5️⃣ Objects

Learn how to define objects safely.

Example

```ts
const user = {
    name: "Sanjeev",
    age: 22
}
```

---

## 6️⃣ Functions

Topics

- Parameters
- Return Types
- Optional Parameters
- Default Parameters
- Rest Parameters

Example

```ts
function add(a:number,b:number):number{
    return a+b;
}
```

---

## 7️⃣ Type Aliases

Example

```ts
type User={
    name:string
    age:number
}
```

---

## 8️⃣ Interfaces

Learn

- Interface
- Interface Extension
- Declaration Merging

Example

```ts
interface User{
    name:string
    age:number
}
```

---

## 9️⃣ Union Types

Example

```ts
let id:number | string;

id=10;

id="ABC123";
```

---

## 🔟 Type Narrowing

Learn how TypeScript automatically detects types.

Example

```ts
function print(value:string | number){

    if(typeof value==="string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    }

}
```

---

## 1️⃣1️⃣ Any vs Unknown

Understand why `any` should be avoided.

Example

```ts
let value:any;
```

Better

```ts
let value:unknown;
```

---

## 1️⃣2️⃣ Enums

Example

```ts
enum Role{
    Admin,
    User,
    Guest
}
```

---

## 1️⃣3️⃣ Tuples

Example

```ts
let person:[string,number];

person=["Sanjeev",22];
```

---

## 1️⃣4️⃣ Generics

One of the most important TypeScript topics.

Example

```ts
function identity<T>(value:T):T{
    return value;
}
```

---

## 1️⃣5️⃣ Advanced Types

Learn

- keyof
- typeof
- Mapped Types
- Conditional Types
- Utility Types

---

## 1️⃣6️⃣ Modules

Learn

- export
- export default
- import

Example

```ts
export const name="Sanjeev";
```

---

# ⚛ React + TypeScript

Inside the `react-ts` folder you'll learn how to use TypeScript with React.

Topics include

- Functional Components
- Props
- State
- Hooks
- Forms
- Events
- Refs
- API Calls
- Custom Hooks

---

## Props Example

```tsx
interface Props{
    name:string;
}

function Welcome({name}:Props){
    return <h1>Hello {name}</h1>;
}
```

---

## useState Example

```tsx
const [count,setCount]=useState<number>(0);
```

---

## useRef Example

```tsx
const inputRef=useRef<HTMLInputElement>(null);
```

---

## Event Example

```tsx
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
}
```

---

# 🧠 Why Learn TypeScript?

TypeScript helps you

- Catch errors before running your code
- Write cleaner code
- Improve code readability
- Build scalable applications
- Get better IDE support
- Reduce bugs
- Work efficiently in teams

---

# 💡 Best Practices

- Prefer `interface` for object shapes.
- Avoid using `any`.
- Use `unknown` when the type is uncertain.
- Enable strict mode.
- Keep functions small.
- Use meaningful variable names.
- Prefer type inference when possible.

---

# 📌 Interview Topics Covered

- Type vs Interface
- Any vs Unknown
- Union vs Intersection
- Generics
- Utility Types
- Type Narrowing
- Type Inference
- keyof
- typeof
- React TypeScript
- Custom Hooks
- Event Types

---

# 🤝 Contributions

Contributions are always welcome!

If you'd like to improve examples, fix mistakes, or add new topics, feel free to open a Pull Request.

---

# ⭐ Support

If this repository helped you learn TypeScript, please consider giving it a ⭐ on GitHub.

It motivates me to create more high-quality educational content for developers.

Happy Coding! ❤️
