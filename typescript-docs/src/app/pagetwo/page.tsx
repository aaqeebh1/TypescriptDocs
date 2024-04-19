import React from "react";

const Page = () => {
  return (
    <div>
      <div className="main-body">
        <h1>Data Types and More in TypeScript</h1>

        <h3>Data Types: Defining What Goes In</h3>
        <p>
          Data types act like labels that tell TypeScript what kind of data a
          variable can hold. This ensures type safety and helps prevent errors.
          Here are some fundamental data types you'll encounter:
        </p>
        <ul>
          <li>
            <strong>string:</strong> Represents text data enclosed in quotes
            (e.g., "Hello").
          </li>
          <li>
            <strong>number:</strong> Represents numerical data (e.g., 3.14,
            100).
          </li>
          <li>
            <strong>boolean:</strong> Represents true or false values (e.g.,
            true, false).
          </li>
          <li>
            <strong>null:</strong> Represents the absence of a value.
          </li>
          <li>
            <strong>undefined:</strong> Represents a variable that hasn't been
            assigned a value yet.
          </li>
        </ul>

        <h3>Operators: Performing Calculations and Comparisons</h3>
        <p>
          Operators are symbols used to perform various operations on data.
          TypeScript inherits most operators from JavaScript, allowing you to:
        </p>
        <ul>
          <li>
            <strong>Perform calculations:</strong> Use arithmetic operators like
            +, -, *, and / for addition, subtraction, multiplication, and
            division.
          </li>
          <li>
            <strong>Compare values:</strong> Use comparison operators like ==,
            !=, {">"}, {"<"}, {">"}=, and {"<"}= to compare values and return
            boolean results (true or false).
          </li>
          <li>
            <strong>Combine expressions:</strong> Use logical operators like &&
            (AND), || (OR), and ! (NOT) to combine conditions and create more
            complex logic.
          </li>
          <li>
            <strong>Assign values:</strong> Use the assignment operator = to
            assign values to variables.
          </li>
        </ul>

        <h3>Expressions: Combining the Elements</h3>
        <p>
          Expressions combine variables, operators, and function calls to
          produce a single value. They are the building blocks for creating more
          complex calculations and logic.
        </p>
        <pre>
          <code>
            let fullName: string = firstName + " " + lastName; let isAdult:
            boolean = age {">"}= 18;
          </code>
        </pre>
        <p>
          In these examples, expressions combine variables and operators to
          create new values or evaluate conditions.
        </p>

        <h3>Exercise: Building with the Basics</h3>
        <h4>Try these exercises to solidify your understanding:</h4>
        <ul>
          <li>
            Declare variables to store your name, age, and favorite color,
            assigning appropriate data types.
          </li>
          <li>
            Write expressions to calculate the area of a rectangle (length *
            width) and the circumference of a circle (2 * Math.PI * radius).
          </li>
          <li>Use comparison operators to check if a number is even or odd.</li>
        </ul>
        <p>
          By mastering these fundamental building blocks, you'll be well on your
          way to writing effective TypeScript code!
        </p>
      </div>
    </div>
  );
};

export default Page;
