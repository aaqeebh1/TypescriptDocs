import React from "react";

const Page = () => {
  return (
    <>
      <div className="main-body">
        <h1>Control Flow: Directing the Course of Your Code</h1>

        <h3>Conditional Statements: Making Choices</h3>
        <p>
          In programming, control flow dictates how your program executes. It
          allows you to make decisions based on conditions and repeat actions
          until a certain criterion is met. TypeScript inherits control flow
          structures from JavaScript, offering tools to guide the execution path
          of your programs.
        </p>
        <p>
          Conditional statements, like if and else, enable your program to
          execute different code blocks based on whether a condition is true or
          false.
        </p>

        <h3>if statement</h3>
        <p>
          This statement evaluates a condition. If the condition is true, the
          code block within the if statement is executed.
        </p>
        <pre>
          <code>
            let isLoggedIn = true; if (isLoggedIn){" "}
            {'console.log("Welcome back!");'}
          </code>
        </pre>

        <h3>else statement</h3>
        <p>
          The else statement provides an alternative code block to execute if
          the condition in the if statement is false.
        </p>
        <pre>
          <code>
            let isLoggedIn = false; if (isLoggedIn){" "}
            {'console.log("Welcome back!");'} else{" "}
            {' console.log("Please log in.");'}
          </code>
        </pre>

        <h3>else if statement</h3>
        <p>
          You can chain multiple conditions using else if statements to check
          for additional scenarios.
        </p>
        <pre>
          <code>
            let grade = 85; if (grade {">"}= 90) {'console.log("Excellent!");'}{" "}
            else if (grade {">"}= 80) {'console.log("Great job!");'} else{" "}
            {'console.log("Keep practicing!");'}
          </code>
        </pre>

        <h3>Looping Constructs: Repetition Made Easy</h3>
        <p>
          Loops allow you to execute a block of code repeatedly until a specific
          condition is met. Here are two common looping constructs in
          TypeScript:
        </p>

        <h3>for loop</h3>
        <p>
          This loop iterates a specific number of times based on a counter
          variable.
        </p>
        <pre>
          <code>
            for (let i = 0; i {"<"} 5; i++) {'console.log("Iteration:", i);'}
          </code>
        </pre>
        <p>
          In this example, the loop iterates five times, printing the current
          iteration number (i) each time.
        </p>

        <h3>while loop</h3>
        <p>
          This loop continues executing a code block as long as a certain
          condition remains true.
        </p>
        <pre>
          <code>
            let count = 0; `while (count {"<"}3){" "}
            {
              `count++` // Increment count by 1
            }
            `
          </code>
        </pre>
        <p>
          This loop keeps printing the value of count and then increments it by
          1 until count reaches 3, at which point the condition becomes false
          and the loop terminates.
        </p>

        <h3>Exercise: Controlling the Flow</h3>
        <ul>
          <li>
            Write an if statement that checks if a number is positive and prints
            a message accordingly.
          </li>
          <li>
            Create a for loop that iterates through an array of names and prints
            greetings for each person.
          </li>
          <li>
            Implement a while loop that keeps asking the user for input until
            they enter a specific keyword to exit the loop.
          </li>
        </ul>
        <p>
          By mastering control flow statements, you can make your TypeScript
          programs more dynamic and responsive to different conditions and user
          interactions.
        </p>
      </div>
    </>
  );
};

export default Page;
