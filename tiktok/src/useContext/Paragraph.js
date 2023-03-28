import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


function Paragraph() {
    const context = useContext(ThemeContext)
    console.log(context.theme);
    return (
        <p className={context.theme}>
            est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla
        </p>
    )
}

export default Paragraph