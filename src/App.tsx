import Canvas from "./components/Canvas";
import Header from "./layout/Header";

export default function App() {
  return (
    <section className="app-container flex h-full flex-col">
      <Header />
      <main className="flex grow flex-col pt-5 align-middle">
        <Canvas />
      </main>
    </section>
  );
}
