import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoitemCollection.js";

import inquirer from "inquirer";

let todos = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

let collection = new TodoCollection("Adam", todos);

//console.clear();
//console.log(`${collection.userName}'s Todo List.`);

function displayTodoList(): void {
  console.log(
    `${collection.userName}'s Todo List. (${collection.getItemCounts().incomplete} item to do))`,
  );
}

enum Commands {
  Quit = "Quit",
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer
    .prompt({
      type: "list",
      name: "command",
      message: "Choose option:",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      if (answers["command"] !== Commands.Quit) {
        promptUser();
      }
    });
}

/*
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
*/
//collection.getTodoItems(true).forEach((item) => item.printDetails());
//console.clear();
// collection.removeComplete();
//collection.getTodoItems(true).forEach((item) => item.printDetails());
