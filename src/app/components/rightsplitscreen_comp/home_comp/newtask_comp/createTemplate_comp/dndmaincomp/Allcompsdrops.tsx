"use client";

import Maindrops from "./allcompsdrops/Maindrops";
import { Project } from "./DndMainComp";

interface Maindrops_props {
  setComponents: (newArray: Project[]) => void;
  components: Project[];
}

const Allcompsdrops: React.FC<Maindrops_props> = ({
  components,
  setComponents,
}) => {
  const handleCheckboxChange = (index: number) => {
    const newcomps = [...components];
    newcomps[0].taskslist[index].taskcomponents[0].textfield.disabled =
      !newcomps[0].taskslist[index].taskcomponents[0].textfield.disabled;
    setComponents(newcomps);
    // setComponents((prevComponents) => {
    //   const updatedComponents = prevComponents.map((project) => ({
    //     ...project,
    //     taskslist: project.taskslist.map((task, taskindex) => {
    //       if (taskindex === index) {
    //         return {
    //           ...task,
    //           taskcomponents: task.taskcomponents.map((component) => ({
    //             ...component,
    //             textfield: {
    //               ...component.tasktitle,
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
  };
  //     const updatedComponents = [...components];

  //     //     setDisableitem(
  //     //       !updatedComponents[0].taskslist[index].taskcomponents[0].tasktitle
  //     //         .disabled
  //     //     );

  //     //     // Update the specific item's disabled property in the copy
  //     //     updatedComponents[0].taskslist[index].taskcomponents[0].tasktitle.disabled =
  //     //       !disableitem;

  //     //     // Update the state with the modified copy
  //     //     setComponents(updatedComponents);
  //     //     console.log(components);
  //     //     setDisableitem(false);

  //     // item.required = !item.required;
  //     //     item.taskcomponents[0].tasktitle.disabled = e.target.checked;
  //     //     console.log(index);
  //     //     console.log(item.taskcomponents[0].tasktitle.disabled);
  //     //     console.log(item);
  //   };
  //   const handleCheckboxChange = () => {
  //     setComponents((prevComponents) => {
  //       const newComponents = [...prevComponents];
  //       const newTasksList = [...newComponents[0].taskslist];
  //       const updatedTask = {
  //         ...newTasksList[taskIndex],
  //         taskcomponents: [
  //           {
  //             ...newTasksList[taskIndex].taskcomponents[0],
  //             tasktitle: {
  //               ...newTasksList[taskIndex].taskcomponents[0].tasktitle,
  //               disabled: checked,
  //             },
  //           },
  //         ],
  //       };
  //       newTasksList[taskIndex] = updatedTask;
  //       newComponents[0] = { ...newComponents[0], taskslist: newTasksList };
  //       return newComponents;
  //     });
  //   };
  return (
    <div className="flex flex-col min-h-screen w-full mt-4 bg-white">
      {components[0].taskslist.map((item, index) => (
        <span key={components[0].id + index} className="w-2/3">
          <Maindrops
            item={item}
            index={index}
            setComponents={setComponents}
            components={components}
          />
          <button
            onClick={(e) => {
              handleCheckboxChange(index);
            }}
            className="btn"
          >
            hide now
          </button>
        </span>
      ))}

      <button
        type="button"
        className="btn mt-12 ml-64 min-w-fit max-w-min"
        onClick={async (e) => {
          e.preventDefault;
          const newindex = components[0].taskslist.length;
          const newComponent = {
            id: newindex,
            tasknumber: newindex + 1,
            taskowner: [],
            taskname: `Task ${newindex + 1}`,
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
                  disabled: true,
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

export default Allcompsdrops;

//  const isTaskTitleDisabled = (): boolean => {
//   return taskslist.some(task =>
//     task.taskcomponents.some(component => component.tasktitle.disabled)
//   );
// };

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
