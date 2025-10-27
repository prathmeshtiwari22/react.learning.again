import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [jokes])

  return (
    <>
      <h1>Chai React Full Stack Project</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id} style={{ marginBottom: '10px' }}>
          <h3>{joke.content}</h3>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  )
}

export default App
