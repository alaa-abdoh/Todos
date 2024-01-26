import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import AllToDos from "./AllToDos";
import Form from "./Form";

function Content(){

    const [data, setData] = useState({
        todos: [] as {id: number, title: string; completed: boolean }[],
        isLoading: false,
        error: ""
    })
    const [idCounter, setIdCounter] = useState<number>(10);
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                const todosList= (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
                setData({...data, todos: todosList.slice(0, 3), isLoading: true}) // take just 3 elements instead of all the return from the API (200 elements)
            }catch(e:any){
                setData({...data, error:e, isLoading: true})
            }
        }
        fetchData();
    },[])

    async function onSubmitSuccess(newToDo:{title: string, completed: boolean}){
        const element= await axios.post("https://jsonplaceholder.typicode.com/todos", newToDo)
        element.data.id= idCounter;
         setData({...data, todos:[...data.todos, element.data]})
         setIdCounter(idCounter+1)
         console.log(element.data)
    }

    function handleCheck(id: number){
        const updatedTodos = data.todos.map(ele =>{
            if(ele.id == id)
                return {...ele, completed: !ele.completed}
            return ele
        })
        setData({...data, todos: updatedTodos})
    }

    function showDeletePopup(id: number){
        Swal.fire({
            text: "Are You sure You want delete this todo ? ",
            title: "Cation !",
            icon: "warning",
            confirmButtonColor: "#FFA07A",
            showDenyButton: true
        }).then(ret => {
            if(ret.isConfirmed)
            handleDelete(id)
        })
    }

    async function handleDelete(id: number){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const updatedTodos= data.todos.filter((ele)=> ele.id !== id);
        setData({...data, todos: updatedTodos})
    }

    return(
       <div className="content">
            <Form onSubmit={onSubmitSuccess}/>
            <AllToDos data={data} onCheckClick={handleCheck} onDeleteClick={showDeletePopup} />
       </div>
    )
}
export default Content;