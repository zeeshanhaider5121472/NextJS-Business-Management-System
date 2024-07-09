import Recent_Templates from "./home_comp/Recent_Templates";

const RightSplitScreenHome = () => {
  return (
    <div className="bg-white overflow-x-auto flex flex-col pt-20 flex-grow w-full rounded-tl-2xl p-16 ">
      <div className="">
        <p className="font-medium text-lg pb-6">Recent Templates</p>
        <Recent_Templates />
      </div>
      <div className="py-20">
        <p className="font-medium text-lg pb-6">Create a New Template </p>
        <div className="h-full w-60 rounded-lg bg-white outline outline-1 outline-gray-300 items-center gap-2 py-3 ml-5 px-2 shadow-md hover:shadow-purple-300 cursor-pointer">
          <p className="flex h-full text-3xl font-bold justify-center items-center">
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSplitScreenHome;
