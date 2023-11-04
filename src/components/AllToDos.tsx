import SingleToDo from "./SingleToDo";

type propsType= {
    data:{
        todos:{id: number, title: string; completed: boolean }[],
        isLoading: boolean,
        error: string
     },
     onCheckClick(id: number): void;
     onDeleteClick(id: number): void;
}



function AllToDos(props: propsType){
    return (
        !props.data.isLoading ? <div className="spinner"></div>
        : <div className="toDos">
            {props.data.todos.map(todo=> <SingleToDo key={todo.id} todo={todo} onCheckClick={props.onCheckClick} onDeleteClick={props.onDeleteClick}/>)}
        </div>
    )
}
export default AllToDos;