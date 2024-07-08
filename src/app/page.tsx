import Header from "./components/Header";
import SplitScreen from "./components/SplitScreen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5 pt-5">
      <Header />
      <SplitScreen />
    </main>
  );
}
