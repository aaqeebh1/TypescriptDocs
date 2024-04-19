import React from "react";

const Page = () => {
  return (
    <>
      <div className="main-body">
        <h1>Object-Oriented Programming (OOP) with TypeScript</h1>

        <h3>Classes: Blueprints for Objects</h3>
        <p>
          Object-oriented programming (OOP) is a powerful paradigm for
          structuring complex programs. In TypeScript, OOP principles help you
          create reusable, maintainable, and well-organized code. Let's explore
          some key OOP concepts:{" "}
        </p>
        <p>
          Think of classes as blueprints that define the properties (data) and
          methods (functions) that objects of a certain type will share. Here's
          the basic structure:
        </p>
        <pre>
          <code>
            class ClassName{" "}
            {`// Properties (data)
                propertyName: dataType

                // Methods (functions)
                methodName(parameters: dataTypes): returnType {
                    // Method body
                }

                constructor(parameters: dataTypes) {
                    // Code to initialize the object
                }`}
          </code>
        </pre>

        <ul>
          <li>
            <strong>ClassName:</strong> Choose a descriptive name that reflects
            the type of object the class represents.
          </li>
          <li>
            <strong>Properties:</strong> Define variables to store data specific
            to each object instance.
          </li>
          <li>
            <strong>Methods:</strong> Define functions that encapsulate the
            object's behavior and operate on its properties.
          </li>
          <li>
            <strong>Constructor:</strong> A special method that gets called
            automatically when you create a new object (instance) of the class.
            It's typically used to initialize the object's properties.
          </li>
        </ul>

        <h3>Objects: Instances of Classes</h3>
        <p>
          Objects are individual entities created from a class blueprint. Each
          object has its own copy of the class properties and methods. You use
          the new keyword to create objects:
        </p>
        <pre>
          <code>
            let person = new Person("Alice", 30); person.greet(); // Calling a
            method on the object instance
          </code>
        </pre>

        <h3>Interfaces: Defining Contracts</h3>
        <p>
          Interfaces act as contracts that specify the structure of an object.
          They define the properties and methods that an object must implement,
          without providing the actual implementation details. This ensures
          consistency and promotes code reusability.
        </p>
        <pre>
          <code>
            interface Greetable {` greet(): string;`}
            class Person implements Greetable{" "}
            {
              // ... (class definition with greet method)
            }
          </code>
        </pre>
        <p>
          In this example, the Greetable interface defines a single method greet
          that any object implementing this interface must have. The Person
          class implements the Greetable interface, ensuring it provides the
          required greet method.
        </p>

        <h3>Inheritance: Building on Existing Code</h3>
        <p>
          Inheritance allows you to create new classes (subclasses) that inherit
          properties and methods from existing classes (superclasses). This
          promotes code reuse and enables you to build specialized classes based
          on more generic ones.
        </p>
        <pre>
          <code>
            class Animal{" "}
            {`move() {
    console.log("Moving...");
  }`}
            class Dog extends Animal{" "}
            {` bark() {
    console.log("Woof!");
  }`}
          </code>
        </pre>
        <p>
          Here, the Dog class inherits from the Animal class and gains access to
          its move method. Additionally, the Dog class defines its own bark
          method.
        </p>

        <h3>Exercise: Building with OOP</h3>
        <ul>
          <li>
            Create a class named Product with properties like name, price, and
            stock. Implement methods to get the product information and
            potentially update its stock.
          </li>
          <li>
            Define an interface named Shape with a method to calculate the area.
            Create subclasses like Circle and Rectangle that inherit from Shape
            and implement the calculateArea method specific to their shape.
          </li>
          <li>
            Design a simple inheritance hierarchy for a vehicle. You can have a
            base class Vehicle with properties like make and model, and then
            create subclasses like Car and Motorcycle that inherit from Vehicle
            and add their own specific properties and methods.
          </li>
        </ul>
        <p>
          By leveraging OOP concepts in TypeScript, you can structure your code
          effectively, promote code reuse, and create more maintainable and
          scalable applications.
        </p>
      </div>
    </>
  );
};

export default Page;
