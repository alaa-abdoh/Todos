import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';

type propsType= {
    todo: {id:number, title: string; completed: boolean };
    onCheckClick(id: number): void;
    onDeleteClick(id: number): void;
}

function SingleToDo(props: propsType){
    return (
        <div className="toDo">
            <h2 title={props.todo.title} style={{color: props.todo.completed? "#999293" : "white", textDecoration: props.todo.completed? "line-through" :"none"}}>
                {props.todo.title}
            </h2>
            <div className="icons">
                <div onClick={()=> props.onCheckClick(props.todo.id)} className="circle"><FontAwesomeIcon icon={faCheck} className='icon'/></div>
                <div onClick={()=> props.onDeleteClick(props.todo.id)} className="circle"><FontAwesomeIcon icon={faTrashCan} className='icon'/></div>
            </div>
        </div>
    )
}
export default SingleToDo;