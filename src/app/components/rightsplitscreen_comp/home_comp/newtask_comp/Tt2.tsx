"use client";

import { useState } from "react";

interface ComponentStateProps {
  id: number;
  taskname: string;
  maincomponent: JSX.Element;
  taskcomponents: JSX.Element[];
}
const Tt2 = () => {
  const [components, setComponents] = useState<ComponentStateProps[]>([
    {
      id: 0,
      taskname: "Task 0",
      maincomponent: (
        <div className="flex flex-row w-80 border-4 border-dotted border-red-600 bordered h-40 bg-white items-center justify-center">
          drop here
        </div>
      ),
      taskcomponents: [
        // <input
        //   key={"t1"}
        //   className="p-2 border rounded"
        //   placeholder="Single Line Input"
        // ></input>,
        // <input
        //   key={"t2"}
        //   className="p-2 border rounded"
        //   placeholder="Single Line Input 2"
        // ></input>,
      ],
    },
  ]);
  console.log("checking TT");

  return (
    <main>
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
        onClick={() => {
          const lastid = !!components.length
            ? components[components.length - 1].id + 1
            : 0;

          const maincomp = {
            id: lastid,
            taskname: `Task ${lastid}`,
            maincomponent: (
              <div className="flex flex-row w-80 border-4 border-dotted border-red-600 bordered h-40 bg-white items-center justify-center">
                drop here
              </div>
            ),
            taskcomponents: [],
          };

          setComponents([...components, maincomp]);
        }}
        type="button"
        className="py-4 px-8 bg-blue-500 text-white"
      >
        Add new comp
      </button>
    </main>
  );
};

export default Tt2;
