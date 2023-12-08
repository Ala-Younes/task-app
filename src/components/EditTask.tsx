import { useEffect, useRef, useState } from "react";
import Task from "../models/Task";

type Props = {
  task: Task;
  onEdit: (taskName: string) => void;
};

const EditTask = ({ onEdit, task }: Props) => {
  const [taskName, setTaskName] = useState(task.name);
  const myInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit(taskName);

    setTaskName("");
    myInputRef.current?.focus();
  };

  // ! The state of taskName needs to be updated each time we click on the edit btn (task state changes)
  useEffect(() => {
    setTaskName(task.name);
  }, [task]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  return (
    <section className="flex justify-center items-center mt-16">
      <form
        onSubmit={handleSubmit}
        className="flex gap-6 p-6 bg-slate-200 shadow-2xl rounded-lg dark:bg-white dark:text-black"
      >
        <input
          className="rounded border border-slate-400 text-slate-600 text-center focus:outline-none focus:border-slate-800 dark:border-black dark:text-black dark:placeholder:text-black"
          type="text"
          name="taskName"
          autoComplete="off"
          placeholder="Edit Task"
          maxLength={25}
          ref={myInputRef}
          value={taskName}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="px-3 py-1 bg-orange-600 text-white rounded-lg hover:opacity-80 transition-opacity duration-200"
          type="submit"
        >
          Edit
        </button>
      </form>
    </section>
  );
};
export default EditTask;
