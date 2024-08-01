import TestingTemplate from "@/app/components/rightsplitscreen_comp/home_comp/newtask_comp/TestingTemplate";

export default function CreateTemplate() {
  //where i'm using useSesarchParams() that whole component should be enclosed in <suspence> </suspence>
  // const searchParams = useSearchParams();
  // const arrayData = JSON.parse(searchParams.get("members") || "[]");
  // const stringData = searchParams.get("processName") || "";
  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      {/* <Tt2 /> */}
      {/* <Header /> */}
      {/* <Dropable /> */}

      {/* createNewTemplate */}

      <TestingTemplate />
      {/* {...arrayData} */}
    </main>
  );
}
