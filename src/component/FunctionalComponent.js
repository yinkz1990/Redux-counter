import React, { useState } from 'react';


const FuntionalComponent = ()=> {
    const [count,setCount] =useState(0)

    const add =()=>{
        setCount(count => count + 1)
    }

    const minus =()=>{
        setCount(count => count - 1)
    }

    const reset =()=>{
        setCount(0)
    }

    return(
        <div>
            <div>{count} </div>
            <button onClick={add}>Add one </button>
            <button onClick={minus}>Minus </button>
            <button onClick={reset}>reset </button>
        </div>
    )

}


export default FuntionalComponent