import { useEffect, useState, useRef } from "react"

// Lưu các giá trị qua một tham chiếu bên ngoài function component
function Content() {

    const [count, setCount] = useState(60)

    const timerId = useRef()

    const prevCount = useRef()

    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
        //console.log(h1Ref.current)
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('Start ->', timerId.current)
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('Stop ->', timerId.current)
    }

    console.log(count, prevCount.current)

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}


export default Content