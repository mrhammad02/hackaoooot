export default function Button(props:any){
    const {name,className,onClick} = props
    return(<>
    <button className={className} onClick={onClick} >{name}</button>
    </>)
}