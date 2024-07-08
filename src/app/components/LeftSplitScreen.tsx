import BottomScreen from "./leftsplitscreen_comp/BottomScreen";
import TopScreen from "./leftsplitscreen_comp/TopScreen";

const LeftSplitScreen = () => {
  return (
    <div className="flex flex-col 2xl:w-1/6 mr-4 ">
      <TopScreen />
      <BottomScreen />
    </div>
  );
};

export default LeftSplitScreen;
