class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate an abstract class");
        }
    }

    area() {
        throw new Error("Method 'area' must be implemented");
    }

    printArea() {
        console.log(`${this.constructor.name} area: ${this.area()}`);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return Math.pow(this.side, 2);
    }
}

// Creating instances of different shapes and printing their areas
let rectangle = new Rectangle(5, 10);
rectangle.printArea();  // Rectangle area: 50

let circle = new Circle(7);
circle.printArea();  // Circle area: 153.93804002589985

let square = new Square(4);
square.printArea();  // Square area: 16
