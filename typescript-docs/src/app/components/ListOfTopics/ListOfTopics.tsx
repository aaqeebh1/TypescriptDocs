import Link from "next/link";
import React from "react";
import "./ListOfTopics.css";

const ListOfTopics = () => {
  return (
    <>
      <div className="list-container">
        <Link href={"/"}>
          TypeScript for Beginners: A Guide to Level Up Your JavaScript
        </Link>
        <Link href={"/pageone"}>Introduction to TypeScript</Link>
        <Link href={"/pagetwo"}> Data Types: Defining What Goes In</Link>
        <Link href={"/pagethree"}>
          Functions in TypeScript: Building Reusable Blocks
        </Link>
        <Link href={"/pagefour"}>
          Control Flow: Directing the Course of Your Code
        </Link>
        <Link href={"/pagefive"}>
          Object-Oriented Programming (OOP) with TypeScript
        </Link>
      </div>
    </>
  );
};

export default ListOfTopics;
