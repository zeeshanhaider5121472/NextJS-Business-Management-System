"use client";
import Header from "@/app/components/Header";
import BottomScreen from "@/app/components/leftsplitscreen_comp/BottomScreen";
import Tt2 from "@/app/components/rightsplitscreen_comp/home_comp/newtask_comp/testing_dump/Tt2";
import { useState } from "react";

export default function CreateTemplate() {
  //where i'm using useSesarchParams() that whole component should be enclosed in <suspence> </suspence>
  // const searchParams = useSearchParams();
  // const arrayData = JSON.parse(searchParams.get("members") || "[]");
  // const stringData = searchParams.get("processName") || "";

  const [components, setComponents] = useState([
    {
      id: 0,
      taskname: "Task 0",
      maincomponent: (
        <div className="flex flex-row w-80 h-40 bg-transparent items-center justify-center cursor-default">
          drop here
        </div>
      ),
      taskcomponents: [],
      tasktitle: (
        <div className="flex flex-row min-h-screen w-1/2 mt-4 items-start ml-4 justify-between">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-blue-500 rounded-full h-7 w-8 flex items-center justify-center text-white font-medium text-md mr-3 ">
              1
            </div>
            <input
              type="text"
              placeholder="Add your text here ..."
              className="input input-ghost  focus:border-b-gray-200  rounded-none bg-transparent focus:border-transparent focus:outline-none focus:ring-transparent w-full"
            />
          </div>
          <div className="p-4 flex-row flex gap-1 justify-start items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span className=" pointer-events-none">Required</span>
          </div>
        </div>
      ),
    },
  ]);
  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-row w-1/6 mr-4 min-h-screen disabled pointer-events-none opacity-55">
          <BottomScreen />
        </div>
        <div className="flex flex-row min-h-screen w-full mt-4 bg-white">
          {components[0].tasktitle}
        </div>
        <div className="flex flex-row w-1/3 mr-4 min-h-screen disabled pointer-events-none opacity-55">
          <BottomScreen />
        </div>
      </div>
      <Tt2 />
      {/* <TestingTemplate />
       */}
    </main>
  );
}
