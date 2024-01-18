import { useState } from 'react'

import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Service from './components/Home'
import Login from './components/Login'

function App() {
  const [val, setVal] = useState([])

  return (
      <>
          <Routes >
              <Route path='/'  element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/service' element={<Service />} />
              </Routes>
      </>
  )
}

export default App
