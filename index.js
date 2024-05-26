#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    const todos = [];
    while (true) {
        const adding = await inquirer.prompt([
            {
                name: "todoItem",
                type: "input",
                message: "Add a todo item (press Enter to finish):"
            }
        ]);
        const todoItem = adding.todoItem.trim();
        if (todoItem) {
            todos.push(todoItem);
        }
        else {
            break;
        }
    }
    console.log("Your todo list:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
main();
