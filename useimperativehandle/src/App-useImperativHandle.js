import { useRef, useEffect } from "react"
import Video from "./Video"

function App() {
    
    // hook useImperativeHandle giúp tuỳ chỉnh ref cho function component
    const videoRef = useRef()

    useEffect(() => {
        console.log(videoRef.current);
    })

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <Video ref={videoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default App

/* 
đầu tiên tạo ref mặc định const videoRef = useRef()
trả về object có thuộc tính là current và truyền object
qua prop ref trong component Video sau đó forwardRef nhận được
cái prop ref nó sẽ sử lý khi gọi Video nó sẽ trả ref qua đối số thứ 2
và nó truyền thẳng vào prop ref trong thẻ video
ref trong thẻ video chính là ref được tạo ra từ const videoRef = useRef()
khi được mounted vào dom nó sẽ lấy tham chiếu của thẻ video và lưu vào biến videoRef
*/