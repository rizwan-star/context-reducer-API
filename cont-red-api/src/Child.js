import React, { useContext } from "react";
import counterContext from "./counterContext";



const Child =()=>{


    let counterValue = useContext(counterContext)

    return(
        <div>
        <h1>
            this is first child
        </h1>
        <h1>
            this is counter Value{counterValue(0)}
        </h1>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>INEMINT-CONTEXT</button>
        </div>
    )

}

export default Child;