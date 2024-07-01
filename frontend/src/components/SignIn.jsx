import { useState } from "react"
import { Button } from "./commonComponents/Button"
import { ButtonWarning } from "./commonComponents/ButtonWarning"
import { Header } from "./commonComponents/Header"
import { InputBox } from "./commonComponents/InputBox"
import { SubHeader } from "./commonComponents/SubHeader"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin=()=>{
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className=" flex flex-col justify-center">
            <div className="rounded-lg  bg-white text-center  w-88 p-2 h-max px-6 ">
                <Header label={"Sign In"}/>
                <div className="w-80">
                    <SubHeader label={"Enter your credentials to access your account"}/>
                
                </div>
                <InputBox onChange={(e)=>{
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"pranshul@gmail.com"}/>
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"123456 #min(6)"}/>
                <Button onClick={async ()=>{
                    const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username:username,
                        password:password
                    })
                    localStorage.setItem("token",response.data.token)
                    navigate("/dashboard?name=" + username[0])

                }} label={"Sign In"}/>
                <ButtonWarning label={"Don't have an account?"} target={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}