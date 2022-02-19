// import useState
import { useState } from 'react'

function HookCounter() {

    // Declaring useState(defaultValue)
    const [count, setCount] = useState(0)

    const updateCount = () => setCount(count + 1)

    return (
        <div>
            <button onClick={updateCount}>Count {count}</button>
        </div>
    )
}

export default HookCounter