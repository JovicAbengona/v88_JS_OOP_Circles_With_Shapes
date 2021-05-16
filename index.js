class Shape{
    constructor(top, left, size){
        this.top = top;
        this.left = left;
        this.size = size;
    }

    drawShape(shape, color, top, left, size){
        const element = document.createElement("i");

        if(shape == "circle")
            element.classList = "fas fa-circle";
        else if(shape == "square")
            element.classList = "fas fa-square";    
        else if(shape == "star")
            element.classList = "fas fa-star";   
             
        element.style.backgroundColor = "transparent";
        element.style.color = color;
        element.style.position = "absolute";

        const drawShape = setInterval(function(){
            size--;
            element.style.top = `${top - size / 2}px`;
            element.style.left = `${left - size / 2}px`;
            element.style.fontSize = `${size}px`;

            console.log(size);

            if(!isReset)
                canvas.append(element);
                
            if(isReset || size == 0){
                clearInterval(drawShape);
                element.remove();
            }
        }, 20);
    }
}

class Circle extends Shape{
    constructor(shape, top, left, size){
        super(top, left, size);
        this.shape = shape;
        this.color = currentColor;
        super.drawShape(this.shape, this.color, top, left, size);
    }
}

class Square extends Shape{
    constructor(shape, top, left, size){
        super(top, left, size);
        this.shape = shape;
        this.color = currentColor;
        super.drawShape(this.shape, this.color, top, left, size);
    }
}

class Star extends Shape{
    constructor(shape, top, left, size){
        super(top, left, size);
        this.shape = shape;
        this.color = currentColor;
        super.drawShape(this.shape, this.color, top, left, size);
    }
}

let shapes = [];
let currentColor = "#52b788";
let currentShape = document.querySelector(".active");
let isReset = false;
const canvas = document.getElementById("canvas");
const color = document.querySelector(".color");
const shapesBtn = document.querySelectorAll(".shapes");
const reset = document.querySelector(".reset");

currentShape.style.color = currentColor;

color.addEventListener("change", function(){
    currentColor = this.value;
    currentShape.style.color = currentColor;
});

shapesBtn.forEach(function (currentBtn){
    currentBtn.addEventListener("click", changeShape);
});

reset.addEventListener("click", function(){
    isReset = true;
    canvas.innerHTML = "";
});

function changeShape(){
    if(this.id != currentShape.id){
        if(currentShape.id == "circle"){
            currentShape.className = "shapes far fa-circle";
            currentShape.style.color = "black";
        }
        else if(currentShape.id == "square"){
            currentShape.className = "shapes far fa-square";
            currentShape.style.color = "black";
        }
        else if(currentShape.id == "star"){
            currentShape.className = "shapes far fa-star";
            currentShape.style.color = "black";
        }

        if(this.id == "circle"){
            this.className = "shapes active fas fa-circle";
        }
        else if(this.id == "square"){
            this.className = "shapes active fas fa-square";
        }
        else if(this.id == "star"){
            this.className = "shapes active fas fa-star";
        }
        
        currentShape = this;
        currentShape.style.color = currentColor;
    }
}

canvas.addEventListener("click", function(event){
    let size = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    let top = event.clientY;
    let left = event.clientX;

    isReset = false;

    if(currentShape.id == "circle") 
        shapes.push(new Circle(currentShape.id, top, left, size));
    else if(currentShape.id == "square")
        shapes.push(new Square(currentShape.id, top, left, size));
    else if(currentShape.id == "star")
        shapes.push(new Star(currentShape.id, top, left, size));
});
