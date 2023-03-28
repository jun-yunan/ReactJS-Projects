import { useState } from "react";

//vd2 const orders = [100, 200, 300]

function App() {

  //vd1 const [counter, setCounter] = useState(1)

  //vd2 const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur)
  //   console.log(total)
  //   return total
  // })

  // const handleIncrease = () => {
  //   //vd1 setCounter(counter + 1)
  //   //vd2 setCounter((prevState => prevState + 1))
  // }

  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'HN, VN'
  })

  const handleUpdate = () => {
    //cách 1: setInfo({
    //   ...info,
    //   bio: "Yêu màu hồng"
    // })

    // cách 2:
    setInfo((prev) => {
      //logic...
      return {
        ...prev,
        bio: 'Yêu màu Nâu1'
      }
    })
  }

  return (
    <div className="App">
      {/*vd1,2 <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button> */}
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update info</button>
    </div>
  );
}

export default App;
