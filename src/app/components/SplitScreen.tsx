"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LeftSplitScreen from "./LeftSplitScreen";
import RightSplitScreenHome from "./rightsplitscreen_comp/RightSplitScreenHome";
import RightSplitScreenMytasks from "./rightsplitscreen_comp/RightSplitScreenMytasks";

const SplitScreen = () => {
  const [activeRightScreenComp, setActiveRightScreenComp] = useState("home");
  const pathname = usePathname();

  useEffect(() => {
    const path = pathname.slice(1); // Remove leading '/'
    if (path === "home" || path === "mytasks") {
      setActiveRightScreenComp(path);
    } else {
      // Handle invalid route, e.g., redirect to home
      setActiveRightScreenComp("home");
    }
  }, [pathname]);

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
  // const router = useRouter();

  return (
    <div className="flex flex-row h-screen">
      <LeftSplitScreen
        setActiveRightScreenComp={setActiveRightScreenComp}
        activeRightScreenComp={activeRightScreenComp}
      />
      {renderRightScreenComp()}
    </div>
  );
};

export default SplitScreen;
