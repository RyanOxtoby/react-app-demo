import logo from './got-logo.jpeg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { getGoTHouses } from './services/apiOfFireAndIce'
import DisplayHouses from './components/displayHouses.component'

function App() {
    const [houses, setHouses] = useState([])

    const fetchHouses = async () => {
        setHouses(await getGoTHouses())
    }

    useEffect(() => {
        fetchHouses()
    }, [])
    return (
        <div className="App">
            <img src={logo} alt="logo" />

            <DisplayHouses houses={houses} testid="displayHouses" />
        </div>
    )
}

export default App
