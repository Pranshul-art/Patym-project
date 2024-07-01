import { useSearchParams } from "react-router-dom";
import { Button } from "./commonComponents/Button";
import { Header } from "./commonComponents/Header";
import { InputBox } from "./commonComponents/InputBox";
import { UserSymbol } from "./commonComponents/UserAlphaSymbol";
import { useState } from "react";
import axios from "axios";
export function SendMoney(){
    const [amount,setAmount]=useState(0);
    const [searchParams]=useSearchParams();
    const id =searchParams.get("id");
    const name =searchParams.get("name");
    return <div className="bg-gray-300 h-screen flex justify-center ">
        <div className="flex flex-col justify-center  ">
            <div className="bg-white rounded-3xl shadow text-center h-max  px-16 py-4 pb-8">
                <Header label={"Send Money"} />
                <div className=" flex py-4 pt-10 w-96 h-max">
                    <div className="flex flex-col justify-center pt-4 ">
                        <UserSymbol Alpha={name[0].toUpperCase()}/>
                    </div>
                    <div className="text-2xl pt-6 font-semibold ">
                        <h1>{name}</h1>
                    </div>
                </div>
                
                <InputBox onChange={(e)=>{
                    setAmount(e.target.value)
                }} label={"Amount (in Rs)"} placeholder={"Enter Amount"}/>
                <Button onClick={async ()=>{
                    const response=await axios.post("http://localhost:3000/api/v1/account/transfer",{
                        "amount":amount,
                        "to": id
                    },{
                        headers:{
                        Authorization:"Bearer "+ localStorage.getItem("token")
                    }})
                }} label={"Initiate Transfer"}/>
            </div>
        </div>
    </div>
}