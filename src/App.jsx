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
        <table>
          <tr>
            <td>Enter Roll No:</td>
            <td><span id='roll-wrapper'>
              <input type="text" id="code-input" placeholder="Enter your roll" value={inData} onChange={e => setInData(e.target.value)}/>
              <button id="verify-button" onClick={fetchData}>Verify</button>
          </span></td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td>Period:</td>
            <td>
            <div id="period" onClick={periodSelected}>
              <button id="1">1</button>
              <button id="2">2</button>
              <button id="3">3</button>
              <button id="4">4</button>
              <br/>
              <button id="5">5</button>
              <button id="6">6</button>
              <button id="7">7</button>
              <button id="8">8</button>
            </div>
            </td>
          </tr>

          
        </table>
      </form>
      <hr/>
      {outData && <DataComponent prop={outData} />}
    </>
  )
}

function periodSelected(e){
  e.preventDefault();
  let but = e.target;
  if(but.tagName!="BUTTON") return;
  but.style.background="blue"
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

