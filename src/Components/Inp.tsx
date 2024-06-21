export default function Input(props:any){
    const {className, placeholder ,style , onChange} =props
    return(<>
    <input type="text"  className={className} placeholder={placeholder} onChange={onChange} style={{width:300,height:50}}/>
    </>)
}