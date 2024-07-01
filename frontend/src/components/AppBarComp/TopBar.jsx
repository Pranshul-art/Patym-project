import { useSearchParams } from "react-router-dom";
import { UserSymbol } from "../commonComponents/UserAlphaSymbol";

export function TopBar(){
    const [searchParams]=useSearchParams();
    const alpha=searchParams.get("name");
    return <div className="shadow h-14 flex justify-between text-lg">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
           
            <UserSymbol Alpha={alpha.toUpperCase()}/>
 
        </div>
    </div>
}