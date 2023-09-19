import Todo from "./Todo"

const Todos =({todos}:any)=>{
 return <div>
    {
        todos.map((todo:any)=>(
            <Todo todo={todo} key={todo.id}/>
        ))
    }
 </div>
}
export default Todos