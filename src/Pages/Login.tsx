import { useState } from "react"
import Input from "../Components/Inp"
import Button from "../Components/btn"
import PrimarySearchAppBar from "../Components/navbar"
export default function Dame3(){
    const [getvalue,setvalue]= useState()
    const [getpass,setpass]= useState()
    return(<>
        <PrimarySearchAppBar value1="Singup" path="/Singup" value2="Home" path2="/"/>
    <h1>Login</h1>
    <Input className="rounded-3 border-primary" placeholder="Email or Phone number" onChange={(e:any)=>{
          setvalue(e.target.value)
    }} />
    <br />
    <br />
   
     <Input className="rounded-3 border-primary" placeholder="Password" onChange={(e:any)=>{
        setpass(e.target.value)
    }} />
    <br />
    <br />
    <Button name="Submitte" className="btn btn-primary rounded-3" onClick={()=>console.log(getvalue,getpass)}/>
    </>)
}