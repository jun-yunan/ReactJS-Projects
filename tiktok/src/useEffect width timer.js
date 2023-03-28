import { useEffect, useState } from "react"

function Content() {
    const [countdown, setCountdown] = useState(180)
    // Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
    // c1
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prevState => prevState - 1)
            console.log('Countdown...')
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    //c2
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1)
    //     }, 1000)
    // }, [countdown])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content