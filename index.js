import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter you sentence to count the words : "
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log("Your sentence word count is : " + words.length);
