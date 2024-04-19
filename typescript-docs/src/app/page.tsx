import Footer from "./components/Footer/Footer";
import ListOfTopics from "./components/ListOfTopics/ListOfTopics";
import Navbar from "./components/Navbar/Navbar";
import "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="main-body">
        <div className="introduction">
          <h1>TypeScript for Beginners: A Guide to Level Up Your JavaScript</h1>
          <h3>Welcome to the exciting world of TypeScript!</h3>
          <p>
            This guide is designed to equip you with the fundamental knowledge
            and skills to kickstart your TypeScript journey. Whether you're a
            complete beginner with no prior programming experience or have some
            background in other languages, this guide will walk you through the
            core concepts of TypeScript, building upon your existing knowledge
            of JavaScript.
          </p>
        </div>
        <div className="what-youll-learn">
          <h3>What You'll Learn:</h3>
          <p>
            By the end of this guide, you'll be able to: Understand the core
            principles of TypeScript and its role in modern web development.
            Write basic TypeScript code with proper syntax and data types.
            Define and utilise functions effectively in your TypeScript
            projects. Control the flow of your programs using conditional
            statements and loops. Apply object-oriented programming concepts in
            your TypeScript development.
          </p>
        </div>
        <div className="lets-dive-in">
          <h1>Let's Dive In!</h1>
          <p>
            This guide is structured into several sections to take you on a
            gradual learning path for TypeScript:
          </p>

          <h2>Learning Path</h2>
          <ul>
            <li>
              <a href="#introduction">Introduction to TypeScript</a>
              <p>
                Explore what TypeScript is, its key features, and advantages
                over JavaScript.
              </p>
            </li>
            <li>
              <a href="#syntax">TypeScript Syntax</a>
              <p>
                Get comfortable with building blocks like variables, data types,
                operators, and expressions.
              </p>
            </li>
            <li>
              <a href="#functions">Functions in TypeScript</a>
              <p>
                Learn how to define and work with functions, including
                parameters, return values, and function types.
              </p>
            </li>
            <li>
              <a href="#control-flow">Control Flow</a>
              <p>
                Master conditional statements (if/else) and looping constructs
                (for/while) for program flow control.
              </p>
            </li>
            <li>
              <a href="#oop">
                Object-Oriented Programming (OOP) with TypeScript
              </a>
              <p>
                Delve into classes, interfaces, and inheritance for building
                well-structured applications.
              </p>
            </li>
          </ul>

          <h2>Learning Approach</h2>
          <ul>
            <li>
              <h3>Learning by Doing</h3>
              <p>
                Solidify your understanding with hands-on coding exercises.
                Solutions or hints will be provided.
              </p>
            </li>
            <li>
              <h3>Visual Aids for Enhanced Learning</h3>
              <p>
                We'll use diagrams, charts, and code snippets to illustrate key
                concepts.
              </p>
            </li>
          </ul>

          <h2>Keep Learning</h2>
          <p>
            This guide provides a foundation. We'll offer resources for further
            exploration:
          </p>
          <ul>
            <li>Books</li>
            <li>Online Tutorials</li>
            <li>Official Documentation</li>
            <li>Community Forums</li>
          </ul>

          <h2>Feedback</h2>
          <p>
            Don't hesitate to share your feedback or questions with the
            programming community!
          </p>

          <h2>Ready to Get Started?</h2>
          <p>
            Let's embark on this exciting journey together and unlock the power
            of TypeScript!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
