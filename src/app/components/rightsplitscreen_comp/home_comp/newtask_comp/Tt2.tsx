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

const Tt2 = () => {
  const [components, setComponents] = useState<ComponentStateProps[]>([]);
  console.log("checking TT");
  const [droppedItem, setDroppedItem] = useState<React.ReactNode>();

  const handleDragEnd = (event: DragEndEvent) => {
    setDroppedItem(event.active.data.current as any);

    // if (active.id !== over?.id) {
    //   setDroppedItem({
    //     id: active.id as string,
    //     type: active.data.current?.type || "",
    //   });
    // }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className="flex flex-row bg-white mt-44">
        <section className="flex flex-col w-full items-center justify-center">
          {droppedItem}
          <div>
            {components.map((item: ComponentStateProps, index: number) => (
              <div key={item.id}>
                {item.taskcomponents.length == 0
                  ? item.maincomponent
                  : item.taskcomponents}
              </div>
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
                  <div className="flex flex-row mb-6 w-80 border-4 border-dotted border-red-600 bordered h-40 bg-white items-center justify-center">
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
          <input placeholder="drag me" />
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
    id: "draggable-textfield11",
    data: <div>bca</div>,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <input
        type="text"
        placeholder="Drag me!"
        className="border p-2 cursor-move"
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
    <div ref={setNodeRef} style={style} className="border p-4 min-h-[100px]">
      abc
    </div>
  );
}

export default Tt2;

// how to do draggable and droppable
// how to get item from draggable
// hot to store item from draggable at droppable
// then push item inside array
