import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
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
    isFavourite: false,
  },
];
export default function TaskBoard() {
  const [tasks, setTasks] = useState(InitialTask);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddEditTask = (Newtask, isTask) => {
    if (isTask) {
      setTasks([...tasks, Newtask]);
    } else {
      setTasks(
        tasks.map((t) => {
          if (t.id === Newtask.id) {
            return Newtask;
          } else {
            return t;
          }
        })
      );
    }
    setTaskToUpdate(null);
    setShowModal(false);
  };
  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };
  const handleDelete = (taskId) => {
    setTasks(
      tasks.filter((task) => {
        return task.id != taskId;
      })
    );
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <AddTaskModal
          onClose={handleClose}
          taskToUpdate={taskToUpdate}
          onAdd={handleAddEditTask}
        />
      )}
      <section className="mb-20" id="tasks">
        <div className="container">
          <Search />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddAction={() => {
                setShowModal(true);
              }}
            />
            <TaskList
              tasks={tasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </section>
    </>
  );
}
