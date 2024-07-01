import { Link } from "react-router-dom"

export function ButtonWarning({label,target,to}){
    return <div className="flex justify-center">
        <div>
            {label}
        </div>
        
        <Link className=" underline cursor-pointer pl-1 " to={to}>
            {target}
        </Link>
        
    </div>
}