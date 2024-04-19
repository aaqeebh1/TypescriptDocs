import React from "react";

const Page = () => {
  return (
    <>
      <div className="main-body">
        <h1>Functions in TypeScript</h1>

        <h3>Defining Functions: Blueprints for Action</h3>
        <p>
          Functions are the workhorses of any programming language, and
          TypeScript is no exception. They allow you to encapsulate a block of
          code that performs a specific task, promoting reusability, code
          organization, and modularity. Let's explore how to define and work
          with functions in TypeScript.
        </p>

        <h3>Defining Functions: Blueprints for Action</h3>
        <p>Here's the basic structure for defining a function in TypeScript:</p>
        <pre>
          <code>
            function functionName(parameters: dataTypes): returnType{" "}
            {
              // Function body containing code to be executed
            }
          </code>
        </pre>
        <ul>
          <li>
            <strong>functionName:</strong> Choose a meaningful name that
            reflects the function's purpose.
          </li>
          <li>
            <strong>parameters:</strong> (Optional) A comma-separated list of
            parameters the function expects, along with their data types.
          </li>
          <li>
            <strong>dataTypes:</strong> Specifies the expected data type for
            each parameter.
          </li>
          <li>
            <strong>returnType:</strong> (Optional) Specifies the type of data
            the function will return. If no return type is specified, TypeScript
            defaults to void (meaning it doesn't return any value).
          </li>
          <li>
            <strong>Function body:</strong> The code that gets executed when the
            function is called. This typically involves operations on the
            parameters and potentially returns a value.
          </li>
        </ul>

        <h3>Example</h3>
        <pre>
          <code>
            function greet(name: string): string{" "}
            {'return "Hello, " + name + "!";'}
            let message = greet("Alice"); console.log(message); // Output:
            "Hello, Alice!"
          </code>
        </pre>

        <h3>Parameters and Arguments: Passing Data</h3>
        <p>
          Parameters act like placeholders for data that you pass to the
          function when you call it. These arguments are matched with the
          parameters based on their order. Ensure the data types of the
          arguments match the expected parameter types for proper execution.
        </p>

        <h3>Return Values: Sending Data Back</h3>
        <p>
          The return statement allows a function to send data back to the
          calling code. The return type specifies the expected data type of the
          returned value. If the function doesn't explicitly return a value
          using return, it defaults to void.
        </p>

        <h3>Function Types: Defining Function Behavior</h3>
        <p>
          TypeScript allows you to define function types separately from
          function declarations. This enhances code readability and
          maintainability. Here's an example:
        </p>
        <pre>
          <code>
            type GreetFunction = (name: string) ={">"} string; const myGreet:
            GreetFunction = (name) ={">"} {'return "Hi, " + name;'};
          </code>
        </pre>
        <p>
          In this example, we define a GreetFunction type that expects a string
          parameter and returns a string. Then, we create a function myGreet
          that adheres to this type definition.
        </p>

        <h3>Exercise: Putting Functions to Work</h3>
        <ul>
          <li>
            Write a function that takes two numbers as parameters and returns
            their sum.
          </li>
          <li>
            Create a function that checks if a string is a palindrome (reads the
            same backward as forward) and returns true or false.
          </li>
          <li>
            Define a function type for a function that takes a number as input
            and returns its square root.
          </li>
        </ul>
        <p>
          By practising with functions, you'll gain a powerful tool for
          structuring your TypeScript code and promoting code reuse.
        </p>
      </div>
    </>
  );
};

export default Page;
