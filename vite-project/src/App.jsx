import {BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Singup from './singup'
import Home from './home'
import Login from './login'
import Profile from './profile'
function App() {
  return (
    <div>
         <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/signup' element={<Singup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
         </Router>
    </div>
  )
}

export default App