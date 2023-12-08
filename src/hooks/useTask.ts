import Task from "../models/Task";
import { useLocalStorage } from "./useLocalStorage";

const useTask = () => {
  const [taskList, setTaskList] = useLocalStorage<Task[]>({
    key: "taskList",
    initialValue: [],
  });

  const addTask = (taskName: string) => {
    if (!taskName) return;

    const createdTask = createTask(new Date(), taskName);

    setTaskList((prevTaskList) => [...prevTaskList, createdTask]);
  };

  const deleteTask = (id: number) => {
    setTaskList((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const editTask = (id: number | undefined, editedTaskName: string) => {
    const selectedTask = taskList.find((t) => t.id === id);
    if (!editedTaskName || !selectedTask) return "Undefined task";

    const editedTask = {
      id: selectedTask.id,
      name: editedTaskName,
      time: selectedTask.time,
    };

    setTaskList((prevTaskList) => {
      return prevTaskList.map((t) =>
        t.id === selectedTask.id ? editedTask : t
      );
    });
  };

  const clearTasks = () => {
    setTaskList([]);
  };

  const createTask = (date: Date, taskName: string) => {
    return {
      id: date.getTime(),
      name: taskName,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
  };

  return {
    taskList,
    addTask,
    deleteTask,
    editTask,
    clearTasks,
  };
};

export default useTask;
