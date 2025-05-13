import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
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
  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleStar = (taskId) => {
    const taskIndex = tasks.findIndex((t) => t.id == taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isFavourite = !newTask[taskIndex].isFavourite;
  };
  const handleSearch = (searchTerm) => {
    const filttered = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTasks([...filttered]);
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
          <Search onSearch={handleSearch} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddAction={() => {
                setShowModal(true);
              }}
              handleDeleteAllTask={handleDeleteAllTask}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleEdit}
                onDelete={handleDelete}
                handleStar={handleStar}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
