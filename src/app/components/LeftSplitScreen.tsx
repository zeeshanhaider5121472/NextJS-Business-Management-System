import BottomScreen from "./leftsplitscreen_comp/BottomScreen";
import TopScreen from "./leftsplitscreen_comp/TopScreen";

const LeftSplitScreen = () => {
  return (
    <div className="flex flex-col w-1/3 md:w-1/4 lg:w-1/5 mr-4 ">
      <TopScreen />
      <BottomScreen />
    </div>
  );
};

export default LeftSplitScreen;
