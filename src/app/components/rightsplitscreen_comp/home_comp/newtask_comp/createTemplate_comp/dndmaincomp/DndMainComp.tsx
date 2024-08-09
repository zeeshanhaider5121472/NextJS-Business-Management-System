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
        if (event.active.id == "textfield" && droppedindex >= 0) {
          console.log("S");
          const newcomps = [...components];
          newcomps[0].taskslist[
            droppedindex
          ].taskcomponents[0].textfield.disabled = false;
          setComponents(newcomps);
        }

        // event.active.id = "textfield"
        // ?
      }}
    >
      <div className="flex flex-row w-full">
        <Allcompsdrops components={components} setComponents={setComponents} />
        <div className="flex flex-row w-1/3 mt-4 mr-4 min-h-screen bg-green-600">
          <DraggableTextField />
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
      className="bg-red-500 h-12 flex items-center justify-center cursor-pointer"
    >
      TEXT-FIELD
    </div>
  );
}
