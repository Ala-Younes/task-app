import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Task from "./models/Task";
import EditTask from "./components/EditTask";

function App() {
  // ! State lives on the first parent element
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [editMode, setEditMode] = useState<"add" | "edit">("add");
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const resetForm = () => {
    setTaskToEdit(null);
    setEditMode("add");
  };
  // TODO A hook for CRUD
  const handleTaskDelete = (id: number) => {
    setTaskList((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
    resetForm();
  };

  const createTask = (date: Date, taskName: string) => {
    return {
      id: date.getTime(),
      name: taskName,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
  };

  const handleTaskAdd = (taskName: string) => {
    if (!taskName) return;

    const createdTask = createTask(new Date(), taskName);

    setTaskList((prevTaskList) => [...prevTaskList, createdTask]);

    resetForm();
  };

  const handleTaskEdit = (taskName: string) => {
    const selectedTask = taskList.find((t) => t.id === taskToEdit?.id);
    if (!taskName || !selectedTask) return "Undefined task";

    const editedTask = {
      id: selectedTask.id,
      name: taskName,
      time: selectedTask.time,
    };

    setTaskList((prevTaskList) => {
      return prevTaskList.map((t) =>
        t.id === selectedTask.id ? editedTask : t
      );
    });

    setEditMode("add");
    setTaskToEdit(null);
  };

  const handleTasksClear = () => {
    setTaskList([]);
    resetForm();
  };

  const handleEditClick = (editedTask: Task) => {
    setEditMode("edit");
    setTaskToEdit(editedTask);
  };

  return (
    <div className="min-h-screen mx-auto max-w-6xl rounded-lg">
      <Header />
      {editMode === "add" ? (
        <AddTask onAdd={handleTaskAdd} />
      ) : (
        <EditTask onEdit={handleTaskEdit} task={taskToEdit!} />
      )}
      <TaskList
        onDelete={handleTaskDelete}
        onEdit={handleEditClick}
        taskList={taskList}
        onClear={handleTasksClear}
      />
    </div>
  );
}

export default App;
