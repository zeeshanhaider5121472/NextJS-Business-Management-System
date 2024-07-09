const Recent_Templates = () => {
  let fakeRecent = [
    { id: 1, name: "Template 1", date: "May 03/2024" },
    { id: 2, name: "Template 2", date: "May 03/2024" },
    { id: 3, name: "Template 3", date: "May 03/2024" },
    { id: 4, name: "Template 4", date: "May 03/2024" },
    { id: 5, name: "Template 5", date: "May 03/2024" },
    { id: 6, name: "Template 6", date: "May 03/2024" },
    { id: 7, name: "Template 7", date: "May 03/2024" },
    { id: 8, name: "Template 8", date: "May 03/2024" },
    { id: 9, name: "Template 9", date: "May 03/2024" },
    { id: 10, name: "Template 10", date: "May 03/2024" },
  ];

  return (
    <div className="  items-center relative  overflow-x-auto overflow-y-scroll no-scrollbar  flex flex-row gap-5 pl-5 py-2">
      {fakeRecent.map((item) => (
        <div className="flex flex-row h-28 ">
          <div className="bg-blue-500 h-full w-2 rounded-s-lg" />
          <div
            key={item.id}
            className=" flex-shrink-0 h-full w-60 rounded-e-lg bg-white outline outline-1 outline-gray-300 items-center gap-2 py-3 px-2"
          >
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">Last Updated: {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recent_Templates;
