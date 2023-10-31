import { useState, useEffect } from 'react'
import './App.css'
import data from './assets/output.json'

export default App

function App() {

  const [personData, setPersonData] = useState({
    roll: '',
    name: '',
    photo: '',
    date: '',
    period: [],
  });


  const handleButtonClick = (arr) =>{
    setPersonData({
      ...personData,
      period: arr,
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData({
      ...personData,
      [name]: value,
    })
  }

  const fetchData = () => {
    const fetchedData = data[personData.roll];
    setPersonData({
      ...personData,
      name: fetchedData.Name,
      photo: fetchedData.Image,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log(JSON.stringify(personData));
  };

  return (
    <>
      <form id='box' onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>Enter Roll No:</td>
            <td><span id='roll-wrapper'>
              <input name="roll" type="text" id="code-input" placeholder="Enter your roll" value={personData.roll} onChange={handleChange} />
              <button id="verify-button" onClick={fetchData}>Verify</button>
            </span></td>
          </tr>
          <tr>
            <td>Date:</td>
            <td>
              <input name="date" type="date" value={personData.date} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Period:</td>
            <td>
              <Buttons updateForm={handleButtonClick}/>
            </td>
          </tr>
          <tr>
            <td colSpan="2"><button type="submit">Submit</button></td>
          </tr>
        </table>
      </form>
      <hr />
      {personData && <DataComponent data={personData} />}
    </>
  )
}

function Buttons({updateForm}) {
  const [selectedButs, setSelectedButs] = useState([]);

  useEffect(() => {
    updateForm(selectedButs);
   }, [selectedButs]);

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const buttonClicked = (but) => {
    if (selectedButs.includes(but)) {
      setSelectedButs(selectedButs.filter((selected) => selected != but))
    }
    else {
      setSelectedButs([...selectedButs, but])
    }
  }

  return (
    <div>
      {buttons.map((but, indx) => (
        <button key={indx} onClick={() =>{ buttonClicked(but)}} className={selectedButs.includes(but) ? 'selectedPeriod' : ''}>
          {but}
        </button>
      ))}
    </div>
  )
}

function DataComponent({data}) {
  return (
    <>
    <h4>Data saved-</h4>
      <img src={data.photo} width="30%" alt="_photo_here_"/>
      <div>Roll: {data.roll}</div>
      <div>Name: {data.name}</div>
      <div>Date: {data.date}</div>
      <div>Period/s: {data.period.map(a=>a+" ")}</div>
    </>
  )
}

