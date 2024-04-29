const inquirer = require('inquirer');
const fs = require(`fs`);

const questions = [
    //3 characters, text color (keyword or hex), shape (circle triangle square 
    //list, color for shape, svg generated...
    {
        type: "input", 
        message: "Enter 3 letters for your SVG: ",
        name: "text"
    },
    {
        type: "input", 
        message: "Input the color of your text (name or hex code): ",
        name: "textcolor"
    },
    {
        type: "rawlist", 
        message: "Choose a shape: ",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input", 
        message: "Input the color of your shape (name or hex code): ", 
        name: "shapecolor"
    }
];

function writeToFile(fileName, data) {``
    fs.writeFile("logo.svg", data,(err)=>{
        if(err) throw err;
    })
}

function start() {
    inquirer.prompt(questions).then((answers)=>{
        const string = shapes.js(answers);
        writeToFile("logo.svg", string);
    })
        
}

start();