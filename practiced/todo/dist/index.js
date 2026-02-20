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
//console.clear();
//console.log(`${collection.userName}'s Todo List.`);
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List. (${collection.getItemCounts().incomplete} item to do)`);
    collection.getTodoItems(showCompleted).forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Toggle"] = "Show/Hide Completed.";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer
        .prompt({
        type: "input",
        name: "add",
        message: "Enter task: ",
    })
        .then((answers) => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}
function promptUser() {
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
        //if (answers["command"] !== Commands.Quit) {
        //promptUser();
        //}
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Quit:
                break;
        }
    });
}
// using the prompt
promptUser();
/*
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
*/
//collection.getTodoItems(true).forEach((item) => item.printDetails());
//console.clear();
// collection.removeComplete();
//collection.getTodoItems(true).forEach((item) => item.printDetails());
