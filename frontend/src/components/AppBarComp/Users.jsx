import { useEffect, useState } from "react";
import { UsersInfo } from "../commonComponents/UsersInfo";
import  axios  from "axios";

export function Users(){
    const [users, setUsers]=useState([]);
    const [filter,setFilter]=useState("");
    useEffect( ()=>{
        const debouncing = setTimeout(()=>{
            axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response=>{
                setUsers(response.data.user)
            })
        },1000)
        return ()=>clearTimeout(debouncing)
        
    },[filter]);
    return <div className="ml-4 mt-10 ">
        <div className="font-bold text-lg">
            Users
        </div>
       
            
        <form class="flex items-center max-w-sm mx-auto">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <input onChange={e=>{
                    setFilter(e.target.value)
                }} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Search users..." required />
            </div> 
            
        </form>
        <div className="mt-8 rounded-lg">
            {users.map(user =><div className="mb-2"><UsersInfo firstName={user.firstName } lastName={user.lastName} id={user._id}/></div>)}
        </div>


       
    </div>
}