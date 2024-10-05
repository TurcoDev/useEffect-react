import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    //   setData(new Date().toString())
    // }, 3000);
    // fetch('https://randomuser.me/api/?results=1')
    // .then(response => response.json())
    // .then(data2 => setData(JSON.stringify(data2)));
    // opcion configuracion vite react
    fetch('/')
    .then(response => response.json())
    .then(data2 => setData(JSON.stringify(data2)));
  }, [])
  // Opcion configuracion server express
  //   fetch('http://localhost:3000')
  //   .then(response => response.json())
  //   .then(data2 => setData(JSON.stringify(data2)));
  // }, [])

  return (
    <>
      <p>{ data }</p>
    </>
  )
}

export default App
