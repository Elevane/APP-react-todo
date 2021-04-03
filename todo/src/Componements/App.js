import React from "react"
import Todo from "./Todo"

const names = [
    "lucas",
    "théo",
    "pierre",
    "alexandre",
    "noémie",
    "léa"
]


function App(){
    
    // generation des composants Todo
    let todos = names.map((item, index)=>{
        return <Todo key={index} name={item} />
    })

    return(
        <article>
            <h1>TODO</h1>
            <ul>
                {todos}
            </ul>
        </article>
    )
}

export default App
