import { forwardRef, useImperativeHandle, useRef } from 'react'
import video1 from './videos/TikTok - Make Your Day.mp4'

function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    //obj này sẽ được gán cho const videoRef = useRef() bên compnent App

    return (
        <div>
            <video src={video1} 
                ref={videoRef}
                width={280}
            />
        </div>
    )
}

export default forwardRef(Video)