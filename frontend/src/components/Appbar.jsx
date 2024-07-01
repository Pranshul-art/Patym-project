import { useEffect } from "react";
import { Balance } from "./AppBarComp/Balance";
import { TopBar } from "./AppBarComp/TopBar";
import { Users } from "./AppBarComp/Users";
import axios from "axios";
import { useState } from "react";
export function Appbar(){
    let [balance,setBalance]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        }).then(response=>{
            setBalance(response.data.balance)
        })
    },[balance])
    return <div className="bg-slate-200 h-screen">
        <div className="bg-blue-50">
            <TopBar/>
        </div>
        
            <Balance value={balance}/>
        
        
            <Users/>
        
    </div>
}