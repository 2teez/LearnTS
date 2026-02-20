import { TodoItem } from "./todoitem.js";
import { TodoCollection } from "./todoitemCollection.js";

let todos = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

let collection = new TodoCollection("Adam", todos);

console.clear();
//console.log(`${collection.userName}'s Todo List.`);

console.log(
  `${collection.userName}'s Todo List. (${collection.getItemCounts().incomplete} item to do))`,
);

/*
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
*/
//collection.getTodoItems(true).forEach((item) => item.printDetails());
//console.clear();
// collection.removeComplete();
collection.getTodoItems(true).forEach((item) => item.printDetails());
