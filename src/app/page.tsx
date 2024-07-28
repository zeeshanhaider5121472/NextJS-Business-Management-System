import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  // return (
  //   <main className="flex min-h-screen flex-col p-5 pt-5">
  //     <Header />
  //     <SplitScreen />
  //   </main>
  // );
}
