import Task from "../models/Task";

type Props = {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (task: Task) => void;
};
const TaskItem = ({ task, onDelete, onEdit }: Props) => {
  const { name, time, id } = task;

  return (
    <li className="w-full md:max-w-[48%] lg:max-w-[31%] shadow-xl flex justify-between px-3 bg-white rounded-lg py-2 border-l-4 border-l-cyan-500 hover:bg-slate-100 transition-all duration-200">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">{name}</h3>
        <p className="text-slate-500">{time}</p>
      </div>
      <div className="flex gap-1">
        <i
          onClick={() => {
            onEdit(task);
          }}
          className="bi bi-pencil-square cursor-pointer hover:scale-125 transition-transform duration-300"
        ></i>
        <i
          onClick={() => onDelete(id)}
          className="bi bi-trash3 text-red-500 cursor-pointer hover:scale-125 transition-transform duration-300"
        ></i>
      </div>
    </li>
  );
};

export default TaskItem;
