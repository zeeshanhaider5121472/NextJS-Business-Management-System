import LeftSplitScreen from "./LeftSplitScreen";
import RightSplitScreen from "./RightSplitScreen";

const SplitScreen = () => {
  return (
    <div className="flex flex-row h-screen">
      <LeftSplitScreen />
      <RightSplitScreen />
    </div>
  );
};

export default SplitScreen;
