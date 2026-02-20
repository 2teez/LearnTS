import { TodoItem } from "./todoItem.js";
export class TodoCollection {
    userName;
    todoItems;
    nextId = 1;
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id) {
        return this.todoItems.find((item) => item.id == id);
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
