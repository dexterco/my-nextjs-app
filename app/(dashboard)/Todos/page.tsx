import db from '@/utils/db'
import Todos from '@/components/Todos'
const getData = async ()=>{
    const todos = await db.todo.findMany({
        where: {},
        orderBy: {
          createdAt: 'desc',
        },
      })
    console.log(todos)
    return todos
}
const TodosPage = async()=>{
    const todos =  await getData()
    return <Todos todos={todos} />
}

export default TodosPage