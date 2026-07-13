// all the hint and erro comes from .d.ts file

import axios, { type AxiosResponse } from "axios"

// 2nd way to import
//import axios from "axios"
//import type { AxiosResponse } from "axios";

// basic way to fetch data
/* 
axios.get('https://example.com/data')
.then(response =>{
    console.log(response.data)
})
*/

// using interface
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    } catch (error: any) {
        //may be in this under error will be or not, because data type is any.
        // console.log(error.message)
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);

            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
}