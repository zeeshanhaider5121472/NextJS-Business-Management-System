"use client";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Project } from "../DndMainComp";

interface Radiobtnsarray_props {
  id: number;
  label: string;
}

interface Radiobtncomp_props {
  taskindex: number;
  setComponents: (newArray: Project[]) => void;
  components: Project[];
}

const Radiobuttons: React.FC<Radiobtncomp_props> = ({
  taskindex,
  setComponents,
  components,
}) => {
  const [radiobtnoptions, setRadiobtnoptions] = useState<
    Radiobtnsarray_props[]
  >([
    { id: 0, label: "Education" },
    { id: 1, label: "Information" },
    { id: 2, label: "Entertainment" },
  ]);
  const [selectedelementid, setSelectedelementid] = useState<number>();
  const style = {
    opacity: 0,
  };
  const addradiobtnelement = () => {
    const newOption: Radiobtnsarray_props = {
      id: radiobtnoptions.length + 1,
      label: "New Option",
    };
    setRadiobtnoptions([...radiobtnoptions, newOption]);
    console.log(radiobtnoptions);
  };
  const handleEdit = (editingoptionid: number, newdata: string) => {
    setRadiobtnoptions(
      radiobtnoptions.map((option) =>
        option.id === editingoptionid ? { ...option, label: newdata } : option
      )
    );
  };

  const Handledeleteradioitem = (deletedid: number) => {
    setRadiobtnoptions(
      radiobtnoptions.filter((option) => option.id !== deletedid)
    );
    console.log(radiobtnoptions);
  };

  const Handledeleteradiocomp = async (index: number) => {
    console.log("dupcomponents");
    const dupcomponents = [...components];
    dupcomponents[0].taskslist[index].taskcomponents[0].radiobutton.disabled =
      true;
    setComponents(dupcomponents);
    console.log(dupcomponents);
  };

  return (
    <div className="mt-5 ml-16 p-4 rounded-lg shadow-md bg-white border-2 border-gray-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-500 font-normal">Radio Buttons</h3>
        <button
          onClick={(e) => {
            Handledeleteradiocomp(taskindex);
          }}
        >
          <IoIosClose className="w-8 h-8 cursor-pointer text-orange-500 hover:text-red-700" />
        </button>
      </div>
      <div className="bg-gray-100 p-3 rounded-md mb-4">
        <input
          type="text"
          value={"Categories"}
          readOnly
          className="w-full bg-gray-100 text-gray-700 placeholder-gray-400 mb-2 focus:outline-none cursor-default"
        />
        <div className="bg-white p-2 rounded-md ">
          {radiobtnoptions.map((option) => (
            <div
              key={option.id}
              className="flex flex-row gap-3 items-center mb-2 mt-4"
            >
              <section className="flex mb-1 h-6 w-6 items-center justify-center rounded-full border-4 p-2 border-gray-200">
                <div
                  className={` flex rounded-full ${
                    option.id === selectedelementid ? "bg-blue-200" : "bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    checked={option.id == selectedelementid}
                    onChange={(e) => {
                      setSelectedelementid(option.id);
                    }}
                    name="category"
                    className="border-4 focus:accent-pink-500"
                    style={style}
                  />
                </div>
              </section>
              <section className="flex flex-row justify-between w-2/3 rounded-md border-2 border-gray-300 p-2">
                {option.id == selectedelementid ? (
                  <input
                    type="text"
                    value={option.label}
                    onChange={(e) => handleEdit(option.id, e.target.value)}
                    onBlur={() => setSelectedelementid(undefined)}
                    className="flex-grow px-2 py-1 rounded focus:border-transparent focus:outline-none focus:ring-transparent"
                    autoFocus
                  />
                ) : (
                  <div
                    onClick={() => {
                      setSelectedelementid(option.id);
                    }}
                  >
                    {option.label}
                  </div>
                )}
                <button onClick={() => Handledeleteradioitem(option.id)}>
                  <IoIosClose className="w-5 h-5 cursor-pointer text-orange-500 hover:text-red-700" />
                </button>
              </section>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={addradiobtnelement}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        + Add Option
      </button>
    </div>
  );
};

export default Radiobuttons;
