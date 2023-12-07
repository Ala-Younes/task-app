import { useRef, useState } from "react";

type Props = {
  onAdd: (taskName: string) => void;
};

const AddTask = ({ onAdd }: Props) => {
  const [taskName, setTaskName] = useState("");
  const myInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAdd(taskName);

    setTaskName("");
    myInputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  return (
    <section className="flex justify-center items-center mt-16">
      <form
        onSubmit={handleSubmit}
        className="flex gap-6 p-6 bg-slate-200 shadow-2xl rounded-lg"
      >
        <input
          className="rounded border border-slate-400 text-slate-600 text-center placeholder:text-slate-400 focus:outline-none focus:border-slate-800"
          type="text"
          name="taskName"
          autoComplete="off"
          placeholder="Add Task"
          maxLength={25}
          ref={myInputRef}
          value={taskName}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:opacity-80 transition-opacity duration-200"
          type="submit"
        >
          Add
        </button>
      </form>
    </section>
  );
};
export default AddTask;
