import { useState } from "react";

type propsType= {
    onSubmit(newToDo:{title: string, completed: boolean}):void;
}

function Form(props: propsType){

    const [value, setValue] = useState<string>("")

    function handleSubmit(e:any){
        e.preventDefault();
        if(value !== "" && !value.startsWith(" ")){
            const newToDo= {
                title: value,
                completed: false
            }
            props.onSubmit(newToDo);
            setValue("")
        }
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input value={value} type="text" placeholder="Add Task" onChange={(e)=> setValue(e.target.value)} />
            <input type="submit" value="I Got this!" />
        </form>
    )
}
export default Form;