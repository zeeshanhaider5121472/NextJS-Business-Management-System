import { FiSidebar } from "react-icons/fi";

const BottomScreen = () => {
  const projArr = ["Marketing Process", "CME Process"];
  return (
    <div className="flex-grow mt-4 bg-white p-1 pt-4 pr-6 pl-6 pb-4 w-full">
      <div className="flex flex-row items-center cursor-default">
        <p className="bg-red-500 h-5 px-1.5 text-white font-bold mr-2 rounded-sm flex items-center text-sm">
          M
        </p>
        <h3 className="text-sm sm:text-base font-bold">Main Workspace</h3>
      </div>

      <div className="mt-5 mb-5 pr-2">
        <label className="input input-bordered  flex items-center gap-2 pb-5">
          <input
            type="text"
            className="grow pl-2 pr-2 pb-1 pt-1 bg-transparent border rounded-md border-gray-300"
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

        {projArr.map((item) => (
          <div
            key={item}
            className="p-1 pb-0 mb-3 flex flex-row justify-between  "
          >
            <div className="flex gap-2 text-sm">
              <FiSidebar size={20} />
              {item}
            </div>
            <button className="text-xl font-semibold">+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomScreen;
