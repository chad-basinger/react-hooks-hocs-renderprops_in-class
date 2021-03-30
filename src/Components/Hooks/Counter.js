import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)


    // function handleCount(){
    //     setCount(count + 5)
    // }

    return (
        <div>
            <h2>
            {count}
            </h2>
            <button onClick={() => setCount(count +5)}>increase count</button>
        </div>
        )
}

export default Counter;