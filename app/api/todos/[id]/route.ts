import { NextResponse } from "next/server"


//it is for GET Request and with params
export const GET = async(request:Request,{params}:any)=>{
    
    return NextResponse.json({data:params.id})
}