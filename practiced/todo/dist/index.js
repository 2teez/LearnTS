"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoitem_1 = require("./todoitem");
const todoitemCollection_1 = require("./todoitemCollection");
let todos = [
    new todoitem_1.TodoItem(1, "Buy Flowers"),
    new todoitem_1.TodoItem(2, "Get Shoes"),
    new todoitem_1.TodoItem(3, "Collect Tickets"),
    new todoitem_1.TodoItem(4, "Call Joe", true),
];
let collection = new todoitemCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List.`);
/*
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
*/
collection.getTodoItems(true).forEach((item) => item.printDetails());
//console.clear();
collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
