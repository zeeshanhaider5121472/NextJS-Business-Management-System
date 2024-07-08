import { GoHome } from "react-icons/go";
import { LuCalendarCheck } from "react-icons/lu";

const LeftSplitScreen = () => {
  return (
    <div className="flex flex-col 2xl:w-1/6 mr-4 ">
      <div className="flex flex-col bg-white w-full pt-4 pr-4 pl-4 pb-4 rounded-tr-2xl">
        <button className="flex flex-row p-1 pl-2 pr-2 items-center rounded-sm cursor-pointer focus:bg-blue-300 transition duration-150 ease-in-out focus:outline-none">
          <GoHome className="mr-2" size={23} />
          <p className="text-sm sm:text-lg mt-1">Home</p>
        </button>
        <button className="flex flex-row mt-4 p-1 pl-2 pr-2 items-center rounded-sm cursor-pointer focus:bg-blue-300 transition duration-150 ease-in-out focus:outline-none">
          <LuCalendarCheck className="mr-2" size={22} />
          <p className="text-sm sm:text-lg mt-1">My Tasks</p>
        </button>
      </div>

      <div className="flex-grow mt-4 bg-white p-1 pt-4 pr-6 pl-6 pb-4 w-full">
        <div className="flex flex-row items-center cursor-default">
          <p className="bg-red-500 p-2 pt-0 pb-0 text-white font-bold mr-2 rounded-sm items-center">
            M
          </p>
          <h3 className="text-sm sm:text-lg font-bold">Main Workspace</h3>
        </div>

        <div className="mt-5 mb-5  pr-2">
          <label className="input input-bordered  flex items-center gap-2">
            <input
              type="text"
              className="grow p-2 bg-transparent border rounded-md border-gray-300"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 opacity-70 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LeftSplitScreen;
