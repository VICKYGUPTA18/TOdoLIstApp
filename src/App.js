import React,{useState} from 'react';
import './index.css';

function App() {
  const[name ,setName]=useState("");
  const[todos,setTodos]=useState([]);
   const onChangeHandler=(e)=>{
     
     setName(e.target.value)
     

   }
   const OnAdd=()=>{
    //console.log(name);
    setTodos([...todos,{id:Math.random()*100,name:name}])
    
    setName("");

   }
   const onDelete=(e)=>{
    setTodos( todos.filter((el)=>el.id!=e.target.id))
     
   }
  return (
    <div className="app-background">
      <p className="heading-text">REACT TODOLIST</p>
      <div className="task-container">
        <div>
          <input className="text-input" onChange={onChangeHandler} value={name}/>
          <button className="add-button" onClick={OnAdd}>ADD</button>
        </div>
        {todos.map((todo)=>{
        return(
          <div className="list-background" key={todo.id}>
          <li className="list-item">{todo.name}</li>
          {/*<button className="delete-icon" type='button'onClick={(e)=>onDelete(e)} id={todo.id}>Delete</button>*/}
          <button class="btn" type='button'onClick={(e)=>onDelete(e)} id={todo.id}><i class="fa fa-trash"></i></button>
          
          </div>
        )
      })}
  
      </div>
      
    </div>
  );
}

export default App;
