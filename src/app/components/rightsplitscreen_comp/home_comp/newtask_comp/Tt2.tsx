"use client";

import { useState } from "react";

interface ComponentStateProps {
  id: number;
  taskname: string;
  maincomponent: JSX.Element;
  components: JSX.Element[];
}
const Tt2 = () => {
  const [components, setComponents] = useState<ComponentStateProps[]>([
    {
      id: 0,
      taskname: "Task 1",
      maincomponent: (
        <div className="flex flex-row w-80 border-4 border-dotted border-red-600 bordered h-40 bg-white items-center justify-center">
          drop here
        </div>
      ),
      components: [
        <input
          key={"t1"}
          className="p-2 border rounded"
          placeholder="Single Line Input"
        ></input>,

        <input
          key={"t2"}
          className="p-2 border rounded"
          placeholder="Single Line Input 2"
        ></input>,
      ],
    },
  ]);
  console.log("checking TT");

  return (
    <main>
      <button type="button" className="py-4 px-8 bg-blue-500 text-white">
        CLICK ME
      </button>
      <div>
        {components.map((item: ComponentStateProps, index: number) => (
          <div key={item.id}>
            {item.components.length == 0 ? item.maincomponent : item.components}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tt2;
