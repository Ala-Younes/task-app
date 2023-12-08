import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Task from "./models/Task";
import EditTask from "./components/EditTask";
import useTheme from "./hooks/useTheme";
import useTask from "./hooks/useTask";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const { activeTheme, handleThemeChange } = useTheme("gray");
  const { taskList, addTask, deleteTask, editTask, clearTasks } = useTask();
  const [editMode, setEditMode] = useState<"add" | "edit">("add");
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const resetForm = () => {
    setTaskToEdit(null);
    setEditMode("add");
  };

  const handleTaskDelete = (id: number) => {
    deleteTask(id);
    resetForm();
    toast.success("Success Deleting Task", {
      position: "top-right",
    });
  };

  const handleTaskAdd = (taskName: string) => {
    addTask(taskName);
    resetForm();
    toast.success("Success Adding Task", {
      position: "top-right",
    });
  };

  const handleTaskEdit = (taskName: string) => {
    editTask(taskToEdit?.id, taskName);
    resetForm();
    toast.success("Success Editing Task", {
      position: "top-right",
    });
  };

  const handleTasksClear = () => {
    clearTasks();
    resetForm();
    toast.success("Success Clearing Tasks", {
      position: "top-right",
    });
  };

  const handleEditClick = (editedTask: Task) => {
    setEditMode("edit");
    setTaskToEdit(editedTask);
  };

  return (
    // ! Work around to apply bg-dark on all the h-screen
    <div className={`${activeTheme} bg-black`}>
      <Toaster />
      <div className={`h-screen mx-auto max-w-6xl py-16 dark:bg-black`}>
        <Header onThemeChange={handleThemeChange} />
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
    </div>
  );
}

export default App;
