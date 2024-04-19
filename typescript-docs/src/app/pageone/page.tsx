import React from "react";

const Page = () => {
  return (
    <>
      <div className="main-body">
        <h1>Introduction to TypeScript</h1>

        <h3>Welcome to the world of TypeScript!</h3>
        <p>
          TypeScript is rapidly gaining popularity as a powerful language for
          building modern web applications. But what exactly is it? Let's break
          it down.
        </p>

        <h3>TypeScript: A Superset of JavaScript</h3>
        <p>
          Imagine JavaScript with superpowers! That's essentially what
          TypeScript is. It incorporates all the familiar features and syntax of
          JavaScript, but adds a crucial element: static typing.
        </p>

        <h3>Static Typing Explained</h3>
        <p>
          In JavaScript, variables can hold any type of data without explicit
          declaration. This flexibility can be handy, but it also comes with a
          risk: potential errors that might only show up when your code actually
          runs.
        </p>
        <p>
          Static typing, on the other hand, requires you to define the data
          types of your variables, functions, and objects upfront. This might
          seem like extra work, but it brings significant benefits:
        </p>
        <ul>
          <li>
            <strong>Early Error Detection:</strong> The TypeScript compiler
            checks your code for type mismatches during compilation, before your
            code even runs. This helps catch errors early in the development
            process, saving you debugging time and headaches.
          </li>
          <li>
            <strong>Improved Code Clarity:</strong> By explicitly defining
            types, your code becomes more self-documenting. Developers can
            easily understand what kind of data each variable or function
            expects, making the codebase easier to read and maintain.
          </li>
        </ul>

        <h3>Key Features of TypeScript</h3>
        <p>
          So, what makes TypeScript stand out? Here are some of its key
          features:
        </p>
        <ul>
          <li>
            <strong>Static Typing:</strong> As discussed above, static typing
            enhances code quality and reduces errors.
          </li>
          <li>
            <strong>Improved Developer Experience:</strong> IDEs and code
            editors can leverage type information to provide better
            autocompletion suggestions, code navigation, and refactoring
            capabilities. This streamlines your development workflow.
          </li>
          <li>
            <strong>Enhanced Tooling:</strong> Static typing enables a wider
            range of developer tools to analyze your code more effectively. This
            leads to earlier detection of potential issues and a more robust
            development environment.
          </li>
          <li>
            <strong>Gradual Adoption:</strong> The beauty of TypeScript is that
            it integrates seamlessly with existing JavaScript projects. You can
            start by adding TypeScript files incrementally, allowing for a
            smooth transition.
          </li>
        </ul>

        <h3>Advantages over JavaScript</h3>
        <p>
          Why choose TypeScript over plain JavaScript? Here are some compelling
          reasons:
        </p>
        <ul>
          <li>
            <strong>Reduced Runtime Errors:</strong> Static typing helps prevent
            runtime crashes by catching potential type mismatches during
            compilation.
          </li>
          <li>
            <strong>Improved Code Maintainability:</strong> Type annotations
            enhance code readability and understanding, especially for larger
            codebases.
          </li>
          <li>
            <strong>Larger Codebases:</strong> TypeScript scales well for
            building and maintaining complex applications with a focus on
            structure and maintainability.
          </li>
        </ul>

        <h3>Exercise: Witnessing the Power of Types</h3>
        <h4>JavaScript</h4>
        <pre>
          <code>
            let name = "John"; name = 42; // This won't cause any errors here,
            but might lead to unexpected behavior later console.log(name);
          </code>
        </pre>

        <h4>TypeScript</h4>
        <pre>
          <code>
            let name: string = "John"; // We explicitly define `name` as a
            string name = 42; // TypeScript compiler will throw an error here!
            This assignment is not allowed because `name` is a string
            console.log(name);
          </code>
        </pre>

        <p>
          This is just a glimpse into the power of TypeScript. As you delve
          deeper, you'll discover how static typing and other features can
          significantly enhance your web development experience.
        </p>
      </div>
    </>
  );
};

export default Page;
