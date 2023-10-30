import { useState } from 'react'
import './App.css'
import data from './assets/output.json'

export default App

function App() {
  const [inData, setInData] = useState("")
  const [outData, setOutData] = useState("")

  const fetchData = (e)=>{
    e.preventDefault();
    setOutData(data[inData]);
  }

  return (
    <>
      <form id='box'>
        <label>Enter Roll No:
          <span id='roll-wrapper'>
              <input type="text" id="code-input" placeholder="Enter your roll" value={inData} onChange={e => setInData(e.target.value)}/>
              <button id="verify-button" onClick={fetchData}>Verify</button>
          </span>
        </label>
      </form>
      <hr/>
      {outData && <DataComponent prop={outData} />}
    </>
  )
}



function DataComponent(prop){
  let data = prop.prop;
  return (
    <>
      <div>Name: {data.Name}</div>
      <img src={data.Image} />
    </>
  )
}

