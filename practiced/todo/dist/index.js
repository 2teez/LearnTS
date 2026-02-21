import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoitemCollection.js";
let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true),
];
let collection = new TodoCollection("Adam", todos);
function showDetails() {
    console.clear();
    console.log(`${collection.userName}'s Todo List (${todos.filter((item) => !item.complete).length} Todo)`);
    todos.forEach((item) => item.printDetails());
}
/*console.clear();
console.log(`${collection.userName}'s Todo List.`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
*/
showDetails();
