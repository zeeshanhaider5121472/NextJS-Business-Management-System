"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Members_Dropdown from "./Members_Dropdown";

const teamMembers = ["Haider", "Ghareer", "Mikail", "John", "Jun"];

const Addmembers_Form = () => {
  const [processName, setProcessName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [remainingMembers, setRemainingMembers] =
    useState<string[]>(teamMembers);

  const router = useRouter();
  const queryParams = new URLSearchParams({
    processName: processName,
    members: JSON.stringify(selectedMembers),
  }).toString();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/newtask/createTemplate?${queryParams}`);
  };

  return (
    <div className="flex w-3/5 items-center justify-center bg-white rounded-lg">
      <span className="w-full max-w-lg  py-60">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-gray-700 ">
            Let’s start working together
          </h1>
          <p className="text-gray-500 mt-4 p-0.5">
            Give your process a name, e.g: marketing plan
          </p>
          <span className="mt-1 border-2 border-gray-300 flex flex-row bg-white rounded-md">
            <input
              type="text"
              placeholder="Process Name"
              className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-transparent"
              value={processName}
              onChange={(e) => {
                setProcessName(e.target.value);
              }}
            />
            <button
              className="px-2 pb-1 pr-3 content-center cursor-pointer font-bold text-gray-400 hover:text-black"
              onClick={(e) => {
                e.preventDefault();
                setProcessName("");
              }}
            >
              x
            </button>
          </span>

          <Members_Dropdown
            selectedMembers={selectedMembers}
            setSelectedMembers={setSelectedMembers}
            remainingMembers={remainingMembers}
            setRemainingMembers={setRemainingMembers}
          />

          <span className="mt-4 flex justify-end">
            <button
              type="submit"
              className="btn bg-blue-500 text-white hover:bg-blue-600"
            >
              Next
              <IoIosArrowForward />
            </button>
          </span>
        </form>
      </span>
    </div>
  );
};

export default Addmembers_Form;
