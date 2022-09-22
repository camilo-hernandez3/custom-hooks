import { useState } from "react"

export const useCounter=(initialValue=10)=>{
    const [Counter, setCounter] = useState(initialValue);
    const increment=(value=1)=>{
        setCounter(Counter+value);
    }
    const decrement=(value=1)=>{
        if(Counter ===0) return;
        setCounter(Counter-value);
    }
    const reset=()=>{
        setCounter(initialValue);
    }
    return{
        Counter,
        increment,
        decrement,
        reset
    }
}