import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { UserSymbol } from "./UserAlphaSymbol";

export function UsersInfo({firstName,lastName,id}){
    const navigate=useNavigate();
    return <div className="flex bg-slate-700 w-full justify-between rounded-lg ">
        <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-align-start" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/> <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/>
            </svg>
            <div className="ml-6">
                <UserSymbol Alpha={firstName[0].toUpperCase()}/>
            </div>
            <div className="flex flex-col justify-center font-semibold text-lg text-white">
                {firstName} {lastName}
            </div>
        </div>
        <div className="pr-4">
            <Button onClick={()=>{
                navigate("/send?id=" + id + "&name=" + firstName);

            }} label={"Send Money"}/>
        </div>
            
        
        
            
    </div>
}