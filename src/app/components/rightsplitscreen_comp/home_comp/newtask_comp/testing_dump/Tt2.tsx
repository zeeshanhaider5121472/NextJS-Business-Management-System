"use client";

import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { useState } from "react";

interface ComponentStateProps {
  id: number;
  taskname: string;
  maincomponent: JSX.Element;
  taskcomponents: JSX.Element[];
}

interface DragDropProps {
  id: string;
  type: string;
}

const AllComp: React.FC<{ item: ComponentStateProps }> = ({ item }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: item.id,
  });

  const style = {
    color: isOver ? "green" : undefined,
    backgroundColor: isOver ? "lightgreen" : undefined,
  };
  return (
    <div
      key={item.id}
      ref={setNodeRef}
      style={style}
      className="flex flex-col items-center justify-center p-4 mb-6  border-4 border-dotted border-red-600 bordered"
    >
      {item.taskcomponents.length === 0
        ? item.maincomponent
        : item.taskcomponents}
    </div>
  );
};

const Tt2 = () => {
  const [components, setComponents] = useState<ComponentStateProps[]>([
    {
      id: 0,
      taskname: "Task 0",
      maincomponent: (
        <div className="flex flex-row w-80 h-40 bg-transparent items-center justify-center cursor-default">
          drop here
        </div>
      ),
      taskcomponents: [],
    },
  ]);
  const [droppedItem, setDroppedItem] = useState<React.ReactNode>();

  const handleDragEnd = (event: DragEndEvent) => {
    // if (active.id !== over?.id) {
    const taskindex = event.over?.id as number;
    console.log(event.over?.id);
    console.log(event.active?.id);
    //adds the new component to the array of components
    if (
      event.active?.id == "draggable-textfield" &&
      (event.over?.id as number) >= 0
    ) {
      setComponents((prevComponents) => {
        const updatedComponents = [...prevComponents];
        updatedComponents[taskindex].taskcomponents = [
          ...updatedComponents[taskindex].taskcomponents,
          event.active.data.current as any,
        ];
        return updatedComponents;
      });
    }
  };

  // if (event.active?.id == "draggable-textfield" && event.over?.id) {
  //   setDroppedItem(event.active.data.current as any);
  // }

  // if (active.id !== over?.id) {
  //   setDroppedItem({
  //     id: active.id as string,
  //     type: active.data.current?.type || "",
  //   });
  // }
  // };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="flex flex-row bg-white mt-44">
        <section className="flex flex-col w-full items-center justify-center">
          {droppedItem}
          <div>
            {components.map((item, index) => (
              //  {item.maincomponent}
              <AllComp item={item} />
            ))}
          </div>
          <button
            onClick={async () => {
              const lastid = !!components.length
                ? components[components.length - 1].id + 1
                : 0;

              const maincomp = {
                id: lastid,
                taskname: `Task ${lastid}`,
                maincomponent: (
                  <div className="flex flex-row w-80 h-40 bg-transparent items-center justify-center">
                    drop here
                  </div>
                ),
                taskcomponents: [],
              };

              setComponents([...components, maincomp]);
              console.log(components);
            }}
            type="button"
            className="py-4 px-8 bg-blue-500 text-white"
          >
            Add new comp
          </button>
        </section>
        <section className="flex flex-col w-full bg-slate-200 items-center justify-center">
          {/* <DraggableTextField1 id="text Field" /> */}
          <DraggableTextField />
          <DroppableArea id="droppable-area" />
        </section>
      </main>
    </DndContext>
  );
};

export function DraggableTextField() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable-textfield",
    data: (
      <input type="text" placeholder="Text Field!" className="border p-2" />
    ),
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <input
        disabled
        type="text"
        placeholder="Text Field!"
        className="border p-2 cursor-move read-only"
      />
    </div>
  );
}

interface DroppableAreaProps {
  id: string;
}

export function DroppableArea({ id }: DroppableAreaProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    color: isOver ? "green" : undefined,
    backgroundColor: isOver ? "lightgreen" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-blue-500 items-center justify-center p-4 border-4 "
    >
      drop on me
    </div>
  );
}

export default Tt2;

// how to do draggable and droppable
// how to get item from draggable
// hot to store item from draggable at droppable
// then push item inside array

// const [components, setComponents] = useState<ComponentStateProps[]>([
//   {
//     id: 0,
//     taskname: "Task 0",
//     maincomponent: (
//       <div className="flex flex-row mb-6 w-80 border-4 border-dotted border-red-600 bordered h-40 bg-white items-center justify-center">
//         drop here
//       </div>
//     ),
//     taskcomponents: [<div key="task0">1 inside</div>],
//   },
//   {
//     id: 1,
//     taskname: "Task 1",
//     maincomponent: (
//       <div className="flex flex-row mb-6 w-80 border-4 border-dotted border-red-600 bordered h-40 bg-white items-center justify-center">
//         drop here
//       </div>
//     ),
//     taskcomponents: [<div key="task1">2.1 inside</div>],
//   },
// ]);
