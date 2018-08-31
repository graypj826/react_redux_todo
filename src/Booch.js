import React, { component } from "react";

const Booch = ({task, removeBooch}) => {
    return(
         <li> 
         {task} 
         <button onClick={removeBooch}> X </button>
         </li>

    )
   
}

export default Booch;