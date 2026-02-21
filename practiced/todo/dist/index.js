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
function showDetails() {
    console.clear();
    console.log(`${collection.userName}'s Todo List (${todos.filter((item) => !item.complete).length} Todo)`);
    if (showCompleted)
        todos.forEach((item) => item.printDetails());
    else {
        todos
            .filter((item) => !item.complete)
            .forEach((item) => item.printDetails());
    }
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add Task";
    Commands["Quit"] = "Quit";
    Commands["Toggle"] = "Hide/Show Options";
})(Commands || (Commands = {}));
function getPromptAdd() {
    console.clear();
    inquirer
        .prompt({
        type: "input",
        name: "add",
        message: "add new task> ",
    })
        .then((answers) => {
        if (answers["add"] !== "") {
            UserPrompt();
        }
    });
}
function UserPrompt() {
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
            case Commands.Add:
                getPromptAdd();
                break;
            case Commands.Toggle:
                if (showCompleted != !showCompleted) {
                    UserPrompt();
                }
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
