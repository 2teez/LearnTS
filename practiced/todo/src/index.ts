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

function showDetails(): void {
  console.clear();
  console.log(
    `${collection.userName}'s Todo List (${todos.filter((item) => !item.complete).length} Todo)`,
  );
  todos.forEach((item) => item.printDetails());
}

enum Commands {
  Add = "Add Task",
  Quit = "Quit",
}

function UserPrompt(): void {
  console.clear();
  showDetails();
  inquirer
    .prompt({
      type: "list",
      name: "commands",
      message: "Choosen Options",
    })
    .then((answers) => {
      switch (answers["commands"]) {
        case Commands.Quit:
          break;
      }
    });
}
/*console.clear();
console.log(`${collection.userName}'s Todo List.`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
*/
UserPrompt();
