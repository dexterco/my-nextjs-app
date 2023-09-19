import { NextResponse } from "next/server"
import db from '@/utils/db'

//it is for GET Request 
export const GET = async(request:Request)=>{
    const todos = await db.todo.findMany({})
    return NextResponse.json({data:todos})
}

//Now the below function for POST Request
export const POST = async(request:Request)=>{
    const data =  await request.json()
    return NextResponse.json({data:data})
}