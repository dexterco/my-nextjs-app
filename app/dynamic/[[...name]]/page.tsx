const dynamic = ({params}:any)=>{
    return params.name?<h2>My Name is {params.name.join(" ")}</h2>: <h2>You are Logged out</h2>
}
export default dynamic