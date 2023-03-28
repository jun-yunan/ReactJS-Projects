import { memo} from "react"

// Lưu các giá trị qua một tham chiếu bên ngoài function component
function Content({ onIncrease }) {


    console.log('re-render');

    return (
        <>
            <h2>Hello anh em</h2>
            <button onClick={onIncrease}>Click me!</button>    
        </>
    )
}


export default memo(Content)