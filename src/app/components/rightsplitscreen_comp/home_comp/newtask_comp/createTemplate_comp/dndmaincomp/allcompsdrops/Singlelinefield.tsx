"use client";

import { IoIosClose } from "react-icons/io";
import { Project } from "../DndMainComp";

interface Singlelinefield_props {
  item: Project["taskslist"][0];
  index: number;
  setComponents: (newArray: Project[]) => void;
  components: Project[];
}

const Singlelinefield: React.FC<Singlelinefield_props> = ({
  item,
  index,
  setComponents,
  components,
}) => {
  //   const handleCheckboxChange = (index: number) => {
  //   setComponents((prevComponents) => {
  //     const updatedComponents = prevComponents.map((project) => ({
  //       ...project,
  //       taskslist: project.taskslist.map((task, taskindex) => {
  //         if (taskindex === index) {
  //           return {
  //             ...task,
  //             taskcomponents: task.taskcomponents.map((component) => ({
  //               ...component,
  //               textfield: {
  //                 ...component.tasktitle,
  //                 disabled: !component.textfield.disabled,
  //               },
  //             })),
  //           };
  //         }
  //         return task;
  //       }),
  //     }));
  //     return updatedComponents;
  //   });
  // };
  const Handleclosetextfield = async (index: number) => {
    const newcomps = [...components];
    newcomps[0].taskslist[index].taskcomponents[0].textfield.disabled = true;
    setComponents(newcomps);
  };

  return (
    <div className="mt-5 ml-16 p-4 rounded-lg shadow-md bg-white border-2">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-500 font-normal">Single Line Field</h3>
        <button
          onClick={(e) => {
            Handleclosetextfield(index);
          }}
        >
          <IoIosClose className="w-8 h-8 cursor-pointer text-green-500 hover:text-red-700" />
        </button>
      </div>
      <div className="bg-gray-100 p-3 rounded-md">
        <input
          type="text"
          placeholder="Type label here ..."
          className="w-full bg-gray-100 text-gray-700 placeholder-gray-400 mb-2 focus:outline-none"
        />
        <div className="bg-white p-2 rounded-md">
          <input
            type="text"
            placeholder="Text will be typed here ..."
            className="w-full text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Singlelinefield;

// setComponents((prevComponents: Project[]) => {
//   const updatedComponents = prevComponents.map((project) => ({
//     ...project,
//     taskslist: project.taskslist.map((task, taskIndex) => {
//       if (taskIndex === index) {
//         return {
//           ...task,
//           taskcomponents: task.taskcomponents.map((component) => ({
//             ...component,
//             textfield: {
//               ...component.textfield,
//               disabled: !component.textfield.disabled,
//             },
//           })),
//         };
//       }
//       return task;
//     }),
//   }));
//   return updatedComponents;
// });

//   <div className="bg-gray-100 p-4 rounded-md">
//   <div className="flex justify-between items-center mb-2">
//     <span className="text-gray-700 font-medium">Single Line Field</span>
//     <button className="text-red-500 hover:text-red-700">X</button>
//   </div>
//   <input
//     type="text"
//     placeholder="Type label here..."
//     className="border border-gray-300 rounded-md w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
//   <input
//     type="text"
//     placeholder="Text will be typed here..."
//     className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//   />
// </div>
