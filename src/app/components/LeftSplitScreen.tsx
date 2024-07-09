import BottomScreen from "./leftsplitscreen_comp/BottomScreen";
import TopScreen from "./leftsplitscreen_comp/TopScreen";

interface LeftSplitScreenProps {
  setActiveRightScreenComp: (component: string) => void;
  activeRightScreenComp: string;
}

const LeftSplitScreen: React.FC<LeftSplitScreenProps> = ({
  setActiveRightScreenComp,
  activeRightScreenComp,
}) => {
  return (
    <div className="flex flex-col w-1/3 md:w-1/4 lg:w-1/4 mr-4 ">
      <TopScreen setActiveRightScreenComp={setActiveRightScreenComp} activeRightScreenComp={activeRightScreenComp}/>
      <BottomScreen />
    </div>
  );
};

export default LeftSplitScreen;
