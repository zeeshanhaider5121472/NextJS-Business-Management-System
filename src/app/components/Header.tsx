import { BsGrid3X3GapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between pb-4 pl-4">
      <div className="flex flex-row items-center">
        <BsGrid3X3GapFill className="mr-3 cursor-pointer" size={25} />
        <p className="font-bold text-2xl mr-5 pt-1.5 text-purple-800">BPMS</p>
      </div>

      <div className="flex flex-row items-center ">
        <IoIosNotificationsOutline className="cursor-pointer ml-5" size={25} />
        <CgProfile className="ml-5 cursor-pointer" size={25} />
      </div>
    </div>
  );
};

export default Header;
