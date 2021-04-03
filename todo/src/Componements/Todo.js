import React from "react"



function Todo(props){
    

    return(
        <div>
            <input type="checkbox"></input>
            <p>{props.name}</p>
        </div>
    )
}
export default Todo