let Mcq=(props)=>{
    return (

        <div>
            <div>{props.qn.title}</div>
            <div>
                <input type="radio" name={props.qn.id} value="1" onChange={props.fun}/>{props.qn.opt}
                <input type="radio" name={props.qn.id} value="2" onChange={props.fun}/>{props.qn.opt2}
                <input type="radio" name={props.qn.id} value="3" onChange={props.fun}/>{props.qn.opt3}
                <input type="radio" name={props.qn.id} value="4" onChange={props.fun}/>{props.qn.opt4}
            </div>
        </div>
        
    )
}
export default Mcq;