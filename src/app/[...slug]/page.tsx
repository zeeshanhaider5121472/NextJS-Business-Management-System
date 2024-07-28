import { notFound } from "next/navigation";
import SplitScreen from "../components/SplitScreen";
import Header from "../components/Header";

export default function CatchAllPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const validRoutes = ["home", "mytasks"];
  const route = params.slug[0];

  if (!validRoutes.includes(route)) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      <Header />
      <SplitScreen />
    </main>
  );
}
