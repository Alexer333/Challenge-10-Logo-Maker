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
<style> 
.textcolor {
    color: textcolor;
}
.shapecolor {
    bg: ${shape}
    color: shapecolor;
}
</style>

<h1 class="${shapecolor}">
    <text class="${textcolor}">
    ${text}
    <text>
<h1>
`
}

module.exports = generate.shapes;