import { newTodo } from "@/utils/actions";

const AddTodo = () => {
  return (
    <form action={newTodo} className="p-4">
      <input
        name="todo"
        type="text"
        className="border rounded-lg py-2 px-4 w-full text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Add a new todo"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
