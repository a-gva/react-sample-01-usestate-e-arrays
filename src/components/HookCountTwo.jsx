import { useState } from 'react'

function HookCountTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const resetCount = () => setCount(initialCount)
    const increaseCount = () => setCount(count + 1)
    const decreaseCount = () => setCount(count - 1)
    // const incrementFive = () => setCount(count + 5)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1)
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h1>

                Count: {count}
            </h1>
            <div>
                <button onClick={resetCount}>Reset</button>
                <button onClick={decreaseCount}>Decrement</button>
                <button onClick={increaseCount}>Increment</button>
            </div>
            <div>
                <button onClick={incrementFive}>Increase 5</button>
            </div>
        </div>
    )
}

export default HookCountTwo
