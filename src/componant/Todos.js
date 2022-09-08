import React,{useState} from "react";
import {addTodos} from "../redux/reducer";
import { connect } from "react-redux";

const Todos =(props)=>{
    console.log("props",props);
    const [todo , setTodo] =useState("");
    const add=()=>{
        if(todo===""){
            alert("Input is Empty");
        }
        else{
            props.addTodos({
                id:Math.floor(Math.random()*1000),
                item:todo,
                completed:false
            });
            setTodo("");
        }
    }
    const handleChange=(e)=>{
        setTodo(e.target.value);
    };
    return(
        <>
            <div className="container my-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-describedby="button-addon2" value={todo} onChange={(e)=>handleChange(e)}/>
                        <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={()=>add()}>+</button>
                </div>
                <br />
                <ul>
                    {props.todos.length > 0 &&
                        props.todos.map((item) => {
                            return <li key={item.id}>{item.item}</li>;
                        })}
                </ul>

            </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        todos:state,
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
       addTodos:(obj) => dispatch(addTodos(obj)),
    }
}
//we can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);

