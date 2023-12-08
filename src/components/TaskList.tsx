import Task from "../models/Task";
import TaskItem from "./TaskItem";
type Props = {
  taskList: Task[];
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
  onClear: () => void;
};

const TaskList = ({ onClear, onDelete, onEdit, taskList }: Props) => {
  return (
    <section className="container mx-auto mt-12 p-4 bg-slate-200 shadow-2xl rounded-lg dark:bg-white dark:text-black">
      <div className="flex justify-between p-2">
        <div className="flex gap-4 items-center">
          <span>Todo</span>
          <span className="flex justify-center items-center w-6 h-6 rounded-full border-1 border-slate-500 bg-slate-400">
            {taskList.length}
          </span>
        </div>
        {!!taskList.length && (
          <button
            onClick={onClear}
            className="bg-blue-700 rounded text-white py-2 px-3 hover:opacity-80 active:scale-110 transition-all duration-300"
          >
            Clear All
          </button>
        )}
      </div>
      <div className="border border-b-black w-full opacity-30"></div>
      <ul className="flex flex-wrap gap-6 p-3 justify-center  ">
        {taskList.map((task) => (
          <TaskItem
            key={task.id}
            onDelete={onDelete}
            onEdit={onEdit}
            task={task}
          />
        ))}
      </ul>
    </section>
  );
};
export default TaskList;
