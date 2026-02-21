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
let showCompleted = true;

function showDetails(): void {
  console.clear();
  console.log(
    `${collection.userName}'s Todo List (${todos.filter((item) => !item.complete).length} Todo)`,
  );
  if (showCompleted) todos.forEach((item) => item.printDetails());
  else {
    todos
      .filter((item) => !item.complete)
      .forEach((item) => item.printDetails());
  }
}

enum Commands {
  Add = "Add Task",
  Quit = "Quit",
  Toggle = "Hide/Show Options",
}

function getPromptAdd() {
  console.clear();
  inquirer
    .prompt({
      type: "input",
      name: "add",
      message: "Enter task> ",
    })
    .then((answers) => {
      if (answers["add"] !== "") {
        collection.addTodo(answers["add"]);
      }
      UserPrompt();
    });
}

function UserPrompt(): void {
  console.clear();
  showDetails();
  inquirer
    .prompt({
      type: "list",
      name: "commands",
      message: "Choose Options",
      choices: Object.values(Commands),
    })
    .then((answers) => {
      switch (answers["commands"]) {
        case Commands.Quit:
          //process.exit(0);
          break;
        case Commands.Add:
          getPromptAdd();
          break;
        case Commands.Toggle:
          showCompleted = !showCompleted;
          UserPrompt();
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
