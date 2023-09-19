import AddTodo from "@/components/AddTodo"

const DashboardLayout = ({ children }:any) => {
  return (
    <div>
      <div>
        <h1>Todos</h1>
      </div>
      <div>
        <AddTodo />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout