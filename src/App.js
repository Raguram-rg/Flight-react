import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [flights, setFlights] = useState([])

  useEffect(() => {
    const getFlights = async() => {
      const responseFlights = await (await fetch('http://localhost:8080/flights')).json()
      setFlights(responseFlights)
    }     
    getFlights();
  },[])

  return (
    <div className="App">
      <h1>Welcome to Flight Checking</h1>
      <table style={{border:'2px solid black',margin:'0 auto'}}>
        <thead>
          <tr style={{background:'rgb(255,0,0)',color:'white',border:'grey'}}>
            <th>Flight Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Available Seats</th>
            <th>Ticket Price</th>
          </tr>
        </thead>
        {flights.map((flight,index) => {
          return(
            <tbody>
              <tr key={index}>
                <td>{flight.flightName}</td>
                <td>{flight.source}</td>
                <td>{flight.destination}</td>
                <td>{flight.seatCount}</td>
                <td>{flight.fare}</td>
              </tr>
            </tbody>
          )
        })}
        </table>
    </div>
  )
}

export default App;
