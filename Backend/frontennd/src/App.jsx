import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const fetchProducts = async (query = '', controller) => {
    try {
      setError(false)
      setLoading(true)
      const response = await axios.get(
        `/api/products${query ? `?search=${query}` : ''}`,
        { signal: controller.signal }
      )
      setProducts(response.data)
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message)
      } else {
        setError(true)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchProducts('', controller)
    return () => controller.abort() // cleanup on unmount
  }, [])

  if (error) return <h2>⚠️ Something went wrong while fetching products.</h2>
  if (loading) return <h2>Loading products...</h2>

  return (
    <div className="App">
      <h1>🛍️ Chai React API Example</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const controller = new AbortController()
            fetchProducts(search, controller)
          }
        }}
        style={{
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '20px',
          width: '250px',
        }}
      />

      <h2>Number of Products: {products.length}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '200px',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="180"
              height="120"
              style={{ borderRadius: '8px' }}
            />
            <h3>{product.name}</h3>
            <p>💰 Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
