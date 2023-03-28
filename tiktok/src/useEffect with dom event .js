import { useEffect } from "react";
import { useState } from "react";

function Content2() {

    const [width, setWidth] = useState(window.innerWidth)
    // window.innerWidth => lấy chiều rộng trình duyệt hiện tại

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        console.log('add event resize')

        //Cleanup func
        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('remove event resize')
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content2