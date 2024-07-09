"use client";

import { useState } from "react";
import LeftSplitScreen from "./LeftSplitScreen";
import RightSplitScreenHome from "./rightsplitscreen_comp/RightSplitScreenHome";
import RightSplitScreenMytasks from "./rightsplitscreen_comp/RightSplitScreenMytasks";

const SplitScreen = () => {
  const [activeRightScreenComp, setActiveRightScreenComp] = useState("home");

  const renderRightScreenComp = () => {
    switch (activeRightScreenComp) {
      case "home":
        return <RightSplitScreenHome />;
      case "mytasks":
        return <RightSplitScreenMytasks />;
      default:
        return <RightSplitScreenHome />;
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <LeftSplitScreen setActiveRightScreenComp={setActiveRightScreenComp} activeRightScreenComp={activeRightScreenComp} />
      {renderRightScreenComp()}
    </div>
  );
};

export default SplitScreen;
