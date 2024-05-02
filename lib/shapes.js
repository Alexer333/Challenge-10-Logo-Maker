const shapes = require(`shapes`);
const jest = require(`jest`);

// 3 Text Limiter
const text = document.getElementById("text").maxLength = "3";

// // Text Color
// text = color.rgb([textcolor]);

// Shape Maker
if(shape === Circle){
    var myShape = new Circle([200,200],50);
} else {
    if(shape === Triangle){
        var myShape = new Square([200,200],50);
    } else {
            var myShape = new Triangle([200,200],50);
    }
}

// // Shape Color
// myShape = color.rgb([textcolor]);

console.log(myShape);

function generateShapes(questions) {
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <${shape} cx="150" cy="100" r="80" fill="${shapecolor}" />


  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>

</svg>
`
}

module.exports = generate.shapes;