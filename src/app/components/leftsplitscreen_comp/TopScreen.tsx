import { GoHome } from "react-icons/go";
import { LuCalendarCheck } from "react-icons/lu";

interface TopScreenProps {
  setActiveRightScreenComp: (component: string) => void;
  activeRightScreenComp: string;
}

const TopScreen: React.FC<TopScreenProps> = ({
  setActiveRightScreenComp,
  activeRightScreenComp,
}) => {
  const bol = activeRightScreenComp !== "home" ? true : false;
  console.log(bol);
  return (
    <div className="flex flex-col bg-white w-full pt-4 pr-4 pl-4 pb-4 rounded-tr-2xl">
      <button
        onClick={() => setActiveRightScreenComp("home")}
        className={` ${
          activeRightScreenComp !== "home" ? "bg-white" : "bg-blue-300 "
        } flex flex-row p-1 w-full pl-2 pr-2 items-center rounded-sm cursor-pointer  transition duration-150 ease-in-out focus:outline-none`}
      >
        <GoHome className="mr-2" size={20} />
        <p className="text-sm sm:text-base mt-1">Home</p>
      </button>
      <button
        onClick={() => setActiveRightScreenComp("mytasks")}
        className={` ${
          activeRightScreenComp !== "mytasks" ? "bg-white" : "bg-blue-300 "
        } flex flex-row mt-4 p-1 pl-2 pr-2 items-center rounded-sm cursor-pointer transition duration-150 ease-in-out focus:outline-none`}
      >
        <LuCalendarCheck className="mr-2" size={20} />
        <p className="text-sm sm:text-base mt-1">My Tasks</p>
      </button>
    </div>
  );
};

export default TopScreen;
