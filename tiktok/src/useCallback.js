import { useState, useCallback } from "react"
import Content from "./Content"

function App() {
  //useCallback tránh tạo ra function mới không cần thiết trong function component
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback( () => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div>
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
    </div>
  )
}

export default App

/* khi component cha bắt đầu chạy 
b1: tạo ra hàm () => {setCount(prevCount => prevCount + 1)} 
này lưu vào bộ nhớ và trả ra tham chiếu mới cho biến handleIncrease
b2: truyền tham chiếu của hàm handleIncrease vào props onIncrease
b3: khi bấm button Click tăng lên 1 dẫn đến setCount và re-render lại App
khi re-render App có nghĩa là tạo ra hàm App với phạm vi mới độc lập không liên quan
đến phạm vi trước đó nữa nó sẽ thực thi lại code trong hàm App, 
trong tình huống này hàm () => {setCount(prevCount => prevCount + 1)} sẽ được tạo mới 
và trả về tham chiếu mới lưu vào biến handleIncrease 
sau đó lại truyền tham chiếu mới (handleIncrease) vào onIncrease
b4: memo bên Content sẽ so sánh tham chiếu mới và tham chiếu cũ 
với toán tử (===) lúc này memo sẽ trả về false dẫn đến props thay đổi
và quyết định re-render lại Content

*/

/* Cách hoạt động với useCallback
b1: khi ứng dụng bắt đầu chạy lần đầu tiên App được mounted
nó sẽ chạy qua useCallback và sẽ nhận cllback là () => {setCount(prevCount => prevCount + 1)}
nó sẽ tạo ra () => {setCount(prevCount => prevCount + 1)}
sẽ tạo ra tham chiếu và useCallback sẽ lưu tham chiếu đó bên ngoài phạm vi bên ngoài hàm App
tiếp theo useCallback trả về tham chiếu mới lưu vào biến handleIncrease
và truyền tham chiếu (handleIncrease) vào prop onIncrease của Content
b2: khi bấm button Click me tăng lên 1 dẫn đến setCount và re-render
khi re-render mà deps trống sẽ trả lại tham chiếu trước đó thay vì tạo ra hàm mới
và useCallback sẽ trả lại tham chiếu trước đó lưu vào biến handleIncrease
sau đó lại truyền tham chiếu trước đó (handleIncrease) vào prop onIncrease
sau đó memo so sánh tham chiếu hiện tại với tham chiếu trước đó => 2 tham chiếu bằng nhau
dẫn đến component Content không bị re-render trong khi Component App lại bị re-render 
--lưu ý: trong tình huống có sử dụng biến bên ngoài mà nó khả năng thay đổi
sau mỗi lần re-render thì có thể đưa nó vào deps của useCallback
nếu có deps sau mỗi lần re-render mà deps thay đổi useCallback sẽ tạo hàm mới
và trả về tham chiếu mới của hàm và lưu tham chiếu mới đó vào biến
còn nếu deps không thay đổi useCallback sẽ trả về tham chiếu trước đó lưu vào biến
*/
