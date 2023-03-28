import { useReducer, useRef } from "react";
import reducer, { initState } from './reducer.js'
import { setJob, addJob, deleteJob } from "./actions.js";
import logger from "./logger.js";

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return (
    <div>
      <h3>Todo</h3>
      <input type="text" 
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(event) => {
          dispatch(setJob(event.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
        ))}
      </ul>
    </div>
  )
}

export default App