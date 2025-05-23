import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import TaskBoard from "./componets/tasks/TaskBoard";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <div className="flex justify-center items-center flex-col">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
