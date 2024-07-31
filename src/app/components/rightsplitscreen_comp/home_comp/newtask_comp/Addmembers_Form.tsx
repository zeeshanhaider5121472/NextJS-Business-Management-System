"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Members_Dropdown from "./members_dropdown";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <span className="w-full max-w-lg border-2 border-blue-500">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-gray-700 ">
            Let’s start working together
          </h1>
          <span className="mt-4 border-2 border-gray-300 flex flex-row bg-white">
            <input
              type="text"
              placeholder="Process Name"
              className="w-full px-4 py-2"
              value={processName}
              onChange={(e) => {
                setProcessName(e.target.value);
              }}
            />
            <button
              className="px-2 py-2 content-center cursor-pointer font-bold"
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
            <button type="submit" className="btn btn-primary text-white">
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
