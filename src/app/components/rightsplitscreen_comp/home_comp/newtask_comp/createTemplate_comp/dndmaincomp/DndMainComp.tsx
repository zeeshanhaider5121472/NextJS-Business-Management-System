"use client";
import { DndContext, DragEndEvent, useDraggable } from "@dnd-kit/core";
import { useId, useState } from "react";
import Allcompsdrops from "./Allcompsdrops";

export interface Project {
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
      radiobutton: {
        id: number;
        value: string;
        disabled: boolean;
      };
    }[];
  }>;
}
const DndMainComp = () => {
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
  const dndid = useId();

  return (
    <DndContext
      id={dndid}
      onDragEnd={(event: DragEndEvent) => {
        const droppedindex = event.over?.id as number;
        const newcomps = [...components];
        if (event.active.id == "textfield" && droppedindex >= 0) {
          newcomps[0].taskslist[
            droppedindex
          ].taskcomponents[0].textfield.disabled = false;
          setComponents(newcomps);
        }
        if (event.active.id == "radiobutton" && droppedindex >= 0) {
          newcomps[0].taskslist[
            droppedindex
          ].taskcomponents[0].radiobutton.disabled = false;
          setComponents(newcomps);
        }

        // event.active.id = "textfield"
        // ?
      }}
    >
      <div className="flex flex-row w-full">
        <Allcompsdrops components={components} setComponents={setComponents} />
        <div className="flex flex-col w-1/3 mt-4 mr-4 min-h-screen bg-green-600">
          <DraggableTextField />
          <DraggableRadioField />
        </div>
      </div>
    </DndContext>
  );
};

export default DndMainComp;

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
      className="bg-red-500 h-12 flex items-center justify-center cursor-pointer mb-8"
    >
      TEXT-FIELD
    </div>
  );
}
export function DraggableRadioField() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "radiobutton",
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
      className="bg-blue-500 h-12 flex items-center justify-center cursor-pointer"
    >
      RADIO-BUTTON
    </div>
  );
}
