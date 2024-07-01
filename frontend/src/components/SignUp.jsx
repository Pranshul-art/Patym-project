import { useState } from "react"
import { Button } from "./commonComponents/Button"
import { ButtonWarning } from "./commonComponents/ButtonWarning"
import { Header } from "./commonComponents/Header"
import { InputBox } from "./commonComponents/InputBox"
import { SubHeader } from "./commonComponents/SubHeader"
import  axios  from "axios";
import { useNavigate } from "react-router-dom"

export const Signup=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return <div className="  bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className=" rounded-lg bg-white w-96 text-center p-2  h-max px-4">
            
            <Header label={"Sign up"}/>
        <div className="w-80">
            <SubHeader label={"Enter your information to create an account"} />
        
        </div>
            
            <InputBox onChange={e=>{
                setFirstName(e.target.value);
            }} label={"First Name"} placeholder={"Pranshul"}/>
            <InputBox onChange={e=>{
                setLastName(e.target.value);
            }} label={"Last Name"} placeholder={"Gupta"}/>
            <InputBox onChange={e=>{
                setUsername(e.target.value)
            }} label={"Email"} placeholder={"pranshul@gmail.com"}/>
            <InputBox onChange={e=>{
                setPassword(e.target.value);
            }} label={"Password"} placeholder={"123456 #min(6)"}/>
            
        
            <Button label={"Sign up"} onClick={async ()=>{
                const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                })
                localStorage.setItem("token",response.data.token)
                navigate("/dashboard?name=" + username[0])
            }}/>
            <ButtonWarning label={"Already have an account?"} target={"Sign in"} to={"/signin"}/>
        </div>
        
    </div>
    </div>
}