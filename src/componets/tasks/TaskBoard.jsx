import { useState } from "react";
import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const InitialTask = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["React", "js", "Nextjs"],
    priority: "High",
    isFavourite: true,
  },
];
export default function TaskBoard() {
  const [tasks, setTasks] = useState(InitialTask);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <Search />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
