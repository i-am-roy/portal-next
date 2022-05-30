export default function Cards ({titel,logo}){
    return(
        <div className="m-2 drop-shadow-md p-2 h-fit border flex items-center flex-col ">
            <div className="logo m-2">
                <i>{logo}</i>
            </div>
            <div className="body">
                <span className="text-lg font-semibold">{titel}</span>
            </div>
        </div>
    )
}