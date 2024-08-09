"use client";

import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Project } from "../createTemplate_comp/dndmaincomp/DndMainComp";

const FixdropH = () => {
  const [components, setComponents] = useState<Project[]>([
    {
      id: 0,
      projectname: "",
      members: [],
      taskslist: [
        {
          id: 0,
          tasknumber: 0 + 1,
          taskowner: [],
          taskname: `Task ${0 + 1}`,
          required: false,
          taskcomponents: [
            {
              tasktitle: {
                id: 0,
                value: "",
                disabled: false,
              },
              textfield: {
                id: 0,
                value: "",
                disabled: false,
              },
            },
          ],
        },
        {
          id: 1,
          tasknumber: 1 + 1,
          taskowner: [],
          taskname: `Task ${1 + 1}`,
          required: false,
          taskcomponents: [
            {
              tasktitle: {
                id: 0,
                value: "",
                disabled: false,
              },
              textfield: {
                id: 0,
                value: "",
                disabled: false,
              },
            },
          ],
        },
      ],
    },
  ]);

  const [index, setIndex] = useState<number>();

  const handleCheckboxChange = (index: number) => {
    const newcomps = [...components];
    newcomps[0].taskslist[index].taskcomponents[0].textfield.disabled =
      !newcomps[0].taskslist[index].taskcomponents[0].textfield.disabled;
    setComponents(newcomps);
  };

  return (
    <DndContext onDragEnd={(event: DragEndEvent) => {}}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col min-h-screen w-full mt-4 bg-white">
          {components[0].taskslist.map((item, index) => (
            <span key={components[0].id + index} className="w-2/3">
              <Tmaindnd
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
        <div className="flex flex-row w-1/3 mt-4 mr-4 min-h-screen bg-green-600">
          <DraggableTextField />
        </div>
      </div>
    </DndContext>
  );
};

export default FixdropH;

export function DraggableTextField() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "textfield",
    // data: (
    //   <input type="text" placeholder="Text Field!" className="border p-2" />
    // ),
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-blue-300 h-12 flex items-center justify-center cursor-pointer"
    >
      TEXT-FIELD
    </div>
  );
}

interface Maindrops_props {
  item: Project["taskslist"][0];
  index: number;
  setComponents: (newArray: Project[]) => void;
  components: Project[];
}

const Tmaindnd: React.FC<Maindrops_props> = ({
  item,
  index,
  components,
  setComponents,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: index as UniqueIdentifier,
  });

  const style = {
    color: isOver ? "green" : undefined,
    backgroundColor: isOver ? "lightgreen" : undefined,
  };
  const [taskname, settaskname] = useState<string>("");

  return (
    <div
      key={item.id}
      ref={setNodeRef}
      style={style}
      className={`mb-4 p-4 border ${isOver ? "bg-green-100" : "bg-white"}`}
    >
      <div
        key={item.taskcomponents[index]?.tasktitle.id}
        className="flex flex-col"
      >
        <div className="flex flex-row mt-4 items-start ml-4 justify-between">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-blue-500 rounded-full w-9 h-7 min-h-min min-w-min flex items-center justify-center text-white font-medium text-md mr-3 ">
              {item.tasknumber}
            </div>
            <input
              key={item.taskcomponents[index]?.tasktitle.id}
              type="text"
              placeholder="Add your text here ..."
              value={taskname}
              onChange={(e) => {}}
              className="input input-ghost rounded-none bg-transparent focus:border-transparent focus:outline-none focus:ring-transparent w-full"
            />
          </div>
          <div className="p-4 pr-0 flex-row flex gap-1 justify-start items-center">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={async (e) => {
                // item.required = !item.required;
                item.required = e.target.checked;
                console.log(index);
                console.log(item.required);
              }}
            />
            <span className=" pointer-events-none">Required</span>
          </div>
        </div>
        <div className="h-0.5 bg-gray-200 ml-16" />
      </div>
      {!item.taskcomponents[0].textfield.disabled && (
        <div
          className="mt-5 ml-16 p-4 rounded-lg shadow-md bg-white border-2"
          ref={setNodeRef}
          style={style}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-500 font-normal">Single Line Field</h3>
            <button onClick={(e) => {}}>
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
      )}
    </div>
  );
};
