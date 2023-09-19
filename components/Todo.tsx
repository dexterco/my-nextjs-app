'use client'
import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";

const Todo = ({ todo }: any) => {
  const [isPending, usetransition] = useTransition();

  return (
    <div
      className={`flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-black ${
        todo.completed ? 'line-through text-white-400' : 'text-white-700'
      }`}
      onClick={() => usetransition(() => completeTodo(todo.id))}
    >
      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-white">
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-3 h-3 m-1 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="ml-3">{todo.content}</span>
    </div>
  );
};

export default Todo;
