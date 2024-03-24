import React, { useState } from 'react'

const useCounter = (stock, initialValue) => {
    const [count, setCount] = useState(initialValue)

    const incrementar = () =>{
        count < stock && setCount(count + 1);
    }

    const decrementar = () =>{
        count > initialValue && setCount(count - 1)
    }

    return {
        count,
        incrementar,
        decrementar
    }
}

export default useCounter