import Header from "@/app/components/Header";
import TestingTemplate from "@/app/components/rightsplitscreen_comp/home_comp/newtask_comp/testing_dump/TestingTemplate";
import Tt2 from "@/app/components/rightsplitscreen_comp/home_comp/newtask_comp/testing_dump/Tt2";

export default function CreateTemplate() {
  //where i'm using useSesarchParams() that whole component should be enclosed in <suspence> </suspence>
  // const searchParams = useSearchParams();
  // const arrayData = JSON.parse(searchParams.get("members") || "[]");
  // const stringData = searchParams.get("processName") || "";
  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      <Header />
      {/* <Dropable /> */}

      {/* createNewTemplate */}

      <TestingTemplate />
      <Tt2 />
      {/* {...arrayData} */}
    </main>
  );
}
