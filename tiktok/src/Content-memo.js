import { memo} from "react"

// Lưu các giá trị qua một tham chiếu bên ngoài function component
function Content({ count }) {

    return (
        <div>
            <h1>Hello AE {count}</h1>
        </div>
    )
}


export default memo(Content)