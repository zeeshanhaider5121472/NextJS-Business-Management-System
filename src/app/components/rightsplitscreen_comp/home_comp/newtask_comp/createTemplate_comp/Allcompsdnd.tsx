"use client";
import { useState } from "react";
import Tasknamefield_comp from "./allcompsdrops/Tasknamefield_comp";

const Allcompsdnd = () => {
  //   interface Task {
  //     id: number;
  //     tasknumber: number;
  //     taskname: string;
  //     taskcomponents: TaskComponent[];
  //   }

  interface Project {
    id: number;
    projectname: string;
    members: string[];
    taskslist: Array<{
      id: number;
      tasknumber: number;
      taskname: string;
      taskowner: string[];
      required: boolean;
      taskcomponents: {
        tasktitle: {
          id: number;
          value: string;
          disabled: boolean;
        };
        textfield: {
          id: number;
          value: string;
          disabled: boolean;
        };
      }[];
    }>;
  }
  const [components, setComponents] = useState<Project[]>([
    {
      id: 0,
      projectname: "",
      members: [],
      taskslist: [
        //   {
        //     id: 0,
        //     tasknumber: 0,
        //     taskname: "task 0",
        //     taskcomponents: [
        //       {
        //         tasktitle: {
        //           id: 0,
        //           value: "",
        //           disabled: false,
        //         },
        //         textfield: {
        //           id: 0,
        //           value: "",
        //           disabled: false,
        //         },
        //       },
        //     ],
        //   },
      ],
    },
  ]);
  return (
    <div className="flex flex-col min-h-screen w-full mt-4 bg-white">
      {components[0].taskslist.map((item, index) => (
        <Tasknamefield_comp
          key={components[0].id + index}
          item={item}
          index={index}
        />
      ))}
      <button
        type="button"
        className="btn min-w-fit max-w-min"
        onClick={async (e) => {
          e.preventDefault;
          const newindex = components[0].taskslist.length;
          const newComponent = {
            id: newindex,
            tasknumber: newindex + 1,
            taskowner: [],
            taskname: `Task ${newindex}`,
            required: false,
            taskcomponents: [
              {
                tasktitle: {
                  id: newindex,
                  value: "",
                  disabled: false,
                },
                textfield: {
                  id: newindex,
                  value: "",
                  disabled: false,
                },
              },
            ],
          };
          const updatedComponents = [...components];
          updatedComponents[0].taskslist.push(newComponent);
          setComponents(updatedComponents);
          console.log(components);
        }}
      >
        Add a New
      </button>
    </div>
  );
};

export default Allcompsdnd;

// const [components, setComponents] = useState([
//       {
//         id: 0,
//         taskname: "Task 0",
//         maincomponent: (
//           <div className="flex flex-row w-80 h-40 bg-transparent items-center justify-center cursor-default">
//             drop here
//           </div>
//         ),
//         taskcomponents: [
//           {
//             tasknamefield: {
//               id: 0,
//               value: "",
//               disabled: false,
//             },
//           },
//         ],
//         tasktitle: (
//           <div className="flex flex-col w-1/2">
//             <div className="flex flex-row mt-4 items-start ml-4 justify-between">
//               <div className="flex flex-row justify-center items-center">
//                 <div className="bg-blue-500 rounded-full h-7 w-8 flex items-center justify-center text-white font-medium text-md mr-3 ">
//                   1
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Add your text here ..."
//                   className="input input-ghost rounded-none bg-transparent focus:border-transparent focus:outline-none focus:ring-transparent w-full"
//                 />
//               </div>
//               <div className="p-4 pr-0 flex-row flex gap-1 justify-start items-center">
//                 <input type="checkbox" className="w-4 h-4" />
//                 <span className=" pointer-events-none">Required</span>
//               </div>
//             </div>
//             <div className="h-0.5 bg-gray-200 ml-16" />
//           </div>
//         ),
//       },
//     ]);
