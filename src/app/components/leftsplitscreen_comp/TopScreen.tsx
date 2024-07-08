import { GoHome } from "react-icons/go";
import { LuCalendarCheck } from "react-icons/lu";

const TopScreen = () => {
  return (
    <div className="flex flex-col bg-white w-full pt-4 pr-4 pl-4 pb-4 rounded-tr-2xl">
      <button className="flex flex-row p-1 pl-2 pr-2 items-center rounded-sm cursor-pointer focus:bg-blue-300 transition duration-150 ease-in-out focus:outline-none">
        <GoHome className="mr-2" size={20} />
        <p className="text-sm sm:text-base mt-1">Home</p>
      </button>
      <button className="flex flex-row mt-4 p-1 pl-2 pr-2 items-center rounded-sm cursor-pointer focus:bg-blue-300 transition duration-150 ease-in-out focus:outline-none">
        <LuCalendarCheck className="mr-2" size={20} />
        <p className="text-sm sm:text-base mt-1">My Tasks</p>
      </button>
    </div>
  );
};

export default TopScreen;
