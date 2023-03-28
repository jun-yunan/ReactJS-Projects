import { useState } from "react";

//vd1 const gifts = [
//   "CPU i9",
//   "RAM 32GB",
//   "Keyboard"
// ]

//vd3

// Response from API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
  
  //vd1 const [gift, setGift] = useState()

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length)
    
  //   setGift(gifts[index])
  // }

  //-----------------------------------------

  //vd2 const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // console.log(name)

  // const handleSubmit = () => {
  //   //call api

  //   console.log({
  //     name,
  //     email
  //   })
  // }

  //vd3 

  // const [checked, setChecked] = useState(1)
  // const handleSubmit = () => {
  //   //call api
  //   console.log({ id: checked })
  // }

  //vd4
  const [checked, setChecked] = useState([])

  console.log(checked)

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)

      if (isChecked) { 
        return checked.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    //call api
    console.log({ ids: checked })
  }

  return (
    <div className="App">
      {/* vd1 <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button> */}

      {/* vd2 <input value={name} onChange={e => setName(e.target.value)}/>
      <input value={email} onChange={e => setEmail(e.target.value)}/>
      <button onClick={handleSubmit}>Register</button> */}

      {/* vd3 {courses.map(course => (
        <div key={course.id}>
          <input checked={checked === course.id} onChange={() => setChecked(course.id)} type="radio" />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button> */}

      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
            type="checkbox"
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
