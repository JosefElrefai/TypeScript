import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(resp => {
    const todo = resp.data as Todo;

    const { id, title, completed } = todo;
    logTodo(id, title, 30);
}); 

const logTodo = (id: number, title: string, completed: number | string) => {
    console.log(`
    id : ${id}
    title : ${title}
    completed: ${completed}
    `);
}