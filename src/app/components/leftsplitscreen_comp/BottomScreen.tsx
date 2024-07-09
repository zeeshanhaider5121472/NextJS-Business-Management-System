import { FiSidebar } from "react-icons/fi";

{
  /* Left side */
}
{
  /* <div className="w-1/3 md:w-1/4 lg:w-1/5 p-4 bg-gray-100">
          <button className="w-full mb-2 px-2 py-1 text-sm md:text-base lg:text-lg bg-blue-500 text-white rounded">
            Button
          </button>
          <p className="text-xs md:text-sm lg:text-base">
            Responsive text content
          </p>
        </div> */
}

{
  /* Right side */
}
{
  /* <div className="flex-grow p-4 bg-white">sjdj</div>
      </div> */
}

const BottomScreen = () => {
  const projArr = ["Marketing Process", "CME Process"];
  return (
    <div className="flex-grow mt-4 bg-white p-1 pt-4 pr-6 pl-6 pb-4 w-full">
      <div className="flex flex-row items-center cursor-default ">
        <p className="bg-red-500 h-5 px-1.5 text-white font-bold mr-2 rounded-sm flex items-center text-xs md:text-sm lg:text-base">
          M
        </p>
        <h3 className="text-xs md:text-sm lg:text-base font-bold truncate">
          Main Workspace
        </h3>
      </div>

      <div className="mt-5 mb-5 pr-2">
        <label className="flex input input-bordered  min-w-0 flex-1 items-center gap-2 pb-5 text-xs md:text-sm lg:text-base">
          <input
            type="text"
            className="  min-w-0 flex-1 pl-2 pr-2 pb-1 pt-1 bg-transparent border rounded-md border-gray-300"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-0 opacity-70 cursor-pointer flex-shrink-0 xl:w-5"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        {projArr.map((item) => (
          <div key={item} className="p-1 pb-0 mb-3 flex items-center">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <FiSidebar size={20} className="flex-shrink-0" />
              <span className="truncate text-sm">{item}</span>
            </div>
            <button className="text-xl font-semibold flex-shrink-0 ml-2">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomScreen;
