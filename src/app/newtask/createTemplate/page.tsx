import Header from "@/app/components/Header";
import BottomScreen from "@/app/components/leftsplitscreen_comp/BottomScreen";
import DndMainComp from "@/app/components/rightsplitscreen_comp/home_comp/newtask_comp/createTemplate_comp/dndmaincomp/DndMainComp";
import FixdropH from "@/app/components/rightsplitscreen_comp/home_comp/newtask_comp/testing_dump/FixdropH";

export default function CreateTemplate() {
  //where i'm using useSesarchParams() that whole component should be enclosed in <suspence> </suspence>
  // const searchParams = useSearchParams();
  // const arrayData = JSON.parse(searchParams.get("members") || "[]");
  // const stringData = searchParams.get("processName") || "";

  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-row w-1/6 mr-4 min-h-screen disabled pointer-events-none opacity-20">
          <BottomScreen />
        </div>
        <DndMainComp />
        {/* <FixdropH /> */}
      </div>
      {/* <Tt2 /> */}
      {/* <TestingTemplate />
       */}
    </main>
  );
}
