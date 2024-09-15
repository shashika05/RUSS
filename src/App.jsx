import { useState } from 'react'

import './App.css'
import Footer from "./components/footer/footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <div>
              <Footer/>
          </div>
      </div>
  )
}

export default App
