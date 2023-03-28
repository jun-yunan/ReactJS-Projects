import { useReducer } from "react";

/* useState
1. Init state: 0
2. Actions: Up (state + 1) / Down (state - 1)
*/

/*
useReducer
1. Init state: 0
2. Actions: Up (state + 1) / Down (state - 1)
3. Reducer
4. Dispatch
*/

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
  console.log("reducer running...");
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}

export default App

/*
Nguyên lý hoạt động
b1: khi gọi hàm dispatch truyền vào action useReduce sử lý action này và
đi gọi hàm reducer lấy state hiện tại truyền vào hàm và lấy luôn action truyền vào hàm reducer
b2: reducer nhận 2 tham số vd state = 0, action down và nó lọt vào 
case DOWN_ACTION và trả ra state - 1 và state mới của Component được update
dẫn đến re-render App
*/