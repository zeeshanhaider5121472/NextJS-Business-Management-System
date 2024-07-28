"use client";

import { IoIosArrowForward } from "react-icons/io";

const CreateNewTemplate = () => {
  // const searchParams = useSearchParams();
  // const encodedData = searchParams.get("data");
  // const { taskArr, priority, taskId } = encodedData
  //   ? JSON.parse(decodeURIComponent(encodedData))
  //   : { taskArr: [], priority: "", taskId: "" };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <span className="w-full max-w-lg border-2 border-blue-500">
        <form className="flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-700 ">
            Let’s start working together
          </h1>
          <input
            type="text"
            placeholder="Task Name"
            className="mt-4 px-4 py-2 border-2 border-gray-300 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Priority"
            className="mt-4  px-4 py-2 border-2 border-gray-300 focus:border-blue-500"
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

    // <p>Task Name: {taskId}</p>
    // <p>Priority: {priority}</p>
    // <p>Priority: {taskArr[0]}</p>
    //Add your new task form here
  );
};

export default CreateNewTemplate;
