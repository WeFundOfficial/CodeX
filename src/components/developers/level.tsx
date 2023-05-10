/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";

const Level = () => {
  const [level, setLevel] = useState(0);
  const info = Levels[level];
  return (
    <div className="flex flex-col lg:flex-row w-full px-2 lg:px-20 pb-64 gap-4 relative right-markbar">
      <div className="w-full">
        {Levels.map((level, index) => (
          <div
            onClick={() => setLevel(index)}
            key={index}
            className="flex p-2 lg:p-8 items-center gap-4 rounded-lg"
            style={{
              background: "linear-gradient(280.57deg, rgba(10, 35, 252, 0.5) 0%, rgba(0, 8, 77, 0) 100%)",
              borderBottom: "1px solid #32B5FFB2"
            }}
          >
            <div
              className="flex w-16 lg:w-24 h-16 lg:h-24 justify-center items-center"
              style={{
                background: "linear-gradient(125.84deg, rgba(50, 181, 255, 0.7) 6.42%, rgba(0, 26, 255, 0.7) 49.21%, rgba(50, 181, 255, 0.7) 94.38%)"
              }}
            >
              <img src={level.icon} className="h-[70%] lg:h-auto" alt="icon" />
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="text-xl lg:text-4xl font-semibold">{level.label}</span>
              <p className="text-sm lg:text-base font-medium">{level.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <span className="text-[#54ABEE] text-2xl lg:text-4xl font-semibold">
          {info.label}
        </span>
        <h1 className="text-3xl lg:text-5xl font-semibold mt-8">
          {info.title}
        </h1>
        <p className="text-base lg:text-xl font-semibold mt-8">
          {info.content}
        </p>
        <p className="text-[#54ABEE] text-base lg:text-xl font-semibold !mt-8">
          {info.article1.label}
        </p>
        <div className="flex mt-4 gap-3 items-center">
          <span className="text-base lg:text-xl font-semibold">
            {info.article1.content}
          </span>
          {info.article1.icon && <img src={info.article1.icon} className="w-4 h-4" alt="article1-icon" />}
        </div>
        <p className="text-[#54ABEE] text-base lg:text-xl font-semibold !mt-6">
          {info.article2.label}
        </p>
        <div className="flex mt-4 gap-3 items-center">
          <span className="text-base lg:text-xl font-semibold">
            {info.article2.content}
          </span>
          {info.article2.icon && <img src={info.article2.icon} className="w-4 h-4" alt="article2-icon" />}
        </div>
      </div>
    </div>
  )
}

export default Level;

const Levels = [
  {
    label: "Level 0",
    title: "No-Code",
    content: "The no-code level is the most user-friendly level, designed for non-technical users who want to build basic applications without writing any code. At this level, the user interacts with a graphical user interface (GUI) that provides pre-built templates, drag-and-drop components, and automation tools. The user can customize the look and feel of the application, add content, and define basic workflows.",
    icon: "/images/developers/no-code.png",
    article1: {
      label: "Ready To Build",
      content: "Build On CodeX"
    },
    article2: {
      label: "Want To Discuss",
      content: "Forum",
      icon: "/images/developers/forum.png"
    }
  },
  {
    label: "Level 1",
    title: "Flow",
    content: "The flow level is designed for users who want to create more complex applications that involve multiple steps, decision-making, and integration with external services. At this level, the user can create flowcharts that define the logical structure of the application. Each block in the flowchart represents a task or a decision, and the user can define the inputs, outputs, and parameters for each block. The flowchart can be exported to code, which can then be edited and customized. The flow generated the final block where no-code required to be used for the level 0 or called no-code.",
    icon: "/images/developers/flow.png",
    article1: {
      label: "Ready To Build",
      content: "Build On CodeX"
    },
    article2: {
      label: "Want To Discuss",
      content: "Forum",
      icon: "/images/developers/forum.png",
    }
  },
  {
    label: "Level 2",
    title: "Translator",
    content: "The translation is the process of converting source code written in one programming language into equivalent code in another programming language. The source code in the original language is translated into a target language that can be executed on a different platform or system. Users can easily translate Solidity programming language to Rush, C, and many more with seamless process. But it requires an understanding of the programming language. Our infrastructure is to make the process seamless without re-writing the code from the start. The code from translation can be converted to Flow on level 1.",
    icon: "/images/developers/translator.png",
    article1: {
      label: "Want To Contribute",
      content: "Github",
      icon: "/images/developers/github.png"
    },
    article2: {
      label: "Want To Discuss",
      content: "Forum",
      icon: "/images/developers/forum.png"
    }
  },
  {
    label: "Level 3",
    title: "Library",
    content: "The library level is designed for users who want to create reusable components and modules that can be used across multiple applications. At this level, the user can write code that encapsulates a specific functionality, such as data access, authentication, or user interface. The code can be packaged as a library, which can then be shared with other users",
    icon: "/images/developers/libraries.png",
    article1: {
      label: "Want To Contribute",
      content: "Github",
      icon: "/images/developers/github.png"
    },
    article2: {
      label: "Want To Discuss",
      content: "Forum",
      icon: "/images/developers/forum.png"
    }
  },
]