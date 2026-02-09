
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Error404 from './Pages/Error404'
import Aboutpage from './Pages/Aboutpage'
import ContactUsPage from './Pages/ContactUsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='signup' element={<Signup />} />
      <Route exact path='signin' element={<Signin />} />
      <Route exact path='*' element={<Error404/>}/>
      <Route exact path='about' element={<Aboutpage />} />
      <Route path='/Contact' element={<ContactUsPage />}/>
   </Routes>
  )
}

export default App
