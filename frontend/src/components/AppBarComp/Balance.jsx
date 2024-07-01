export function Balance({value}){
    return <div className="flex m-4">
        <div className="font-bold text-lg">
           Your balance
        </div>
        <div className="ml-3 font-semibold text-lg">
            Rs {value}
        </div>
    </div>
}