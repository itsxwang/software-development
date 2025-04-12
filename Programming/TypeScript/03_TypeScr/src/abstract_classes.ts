//Abstract classes - Restricted classes that cannot be used to create objects and designed to be specifically used as base class

//See this https://youtu.be/iJkaAJUzeWQ?si=LtnHT5ZMw3YBFvEs&t=7427
// The idea of abstract class is basically to implement all abstract methods and properties in the concrete classes

abstract class Shape {
    // abstract methods
    abstract getArea(): string;
    abstract getPerimeter(): string;

    // abstract property 
    abstract name: string;

    // regular methods
    printName(): void {
        console.log('Shape is ' + this.name);
    }
}

class Rectangle extends Shape {
    // must implement abstract methods and properties in extended class
    getArea(): string {
        return 'length * width';
    }
    getPerimeter(): string {
        return `2 * ('length + width')`;
    }
    // implement abstract property
    name = 'Rectangle';
}

new Rectangle().printName();// Shape is Rectangle