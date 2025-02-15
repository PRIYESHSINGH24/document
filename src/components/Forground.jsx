import React, { useState, useRef } from "react";
import Card from "./card";

function Foreground() {
  const ref = useRef(null);
  
  const data = [
    {
      d: "React Basics: Understanding components, props, and state management.",
      filesize: "1.2mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      d: "Node.js and Express: Building a simple REST API with authentication.",
      filesize: "850kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      d: "Mastering CSS Grid & Flexbox: Responsive layouts made easy.",
      filesize: "750kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      d: "Understanding JavaScript Closures and their use cases.",
      filesize: "500kb",
      close: false,
      tag: { isOpen: true, tagTitle: "Read More", tagColor: "red" },
    },
    {
      d: "MongoDB vs SQL: Choosing the right database for your project.",
      filesize: "1.5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "yellow" },
    },
    {
      d: "Docker & Kubernetes: Deploying scalable applications with ease.",
      filesize: "2.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Learn More", tagColor: "purple" },
    },
    {
      d: "Data Structures & Algorithms: Mastering recursion and dynamic programming.",
      filesize: "1.8mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download PDF", tagColor: "orange" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-10">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
