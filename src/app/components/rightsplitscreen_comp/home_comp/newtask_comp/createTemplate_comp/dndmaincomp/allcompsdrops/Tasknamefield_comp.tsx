"use state";

import { useState } from "react";

export interface comp_Props {
  item: {
    tasknumber: number;
    required: boolean;
    taskcomponents: Array<{
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
    }>;
  };
  index: number;
}

const Tasknamefield_comp: React.FC<comp_Props> = ({ item, index }) => {
  const [taskname, settaskname] = useState<string>("");

  const handleInputChange = (value: string) => {
    settaskname(value);
    console.log(index);
    item.taskcomponents.map((item, i) => {
      if (i === 0) {
        item.tasktitle.value = value;
      }
      console.log(value);
    });
  };
  return (
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
            onChange={(e) => handleInputChange(e.target.value)}
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
  );
};

export default Tasknamefield_comp;
