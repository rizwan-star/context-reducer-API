import React, { useContext } from "react";
import counterContext from "./counterContext";



const Child =()=>{


    let counterValue = useContext(counterContext)

    console.log(counterValue)
    return(

        <h1>
            this is first child
        </h1>
    )

}

export default Child;