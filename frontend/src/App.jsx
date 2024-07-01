import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Signup } from "./components/SignUp"
import { Signin } from './components/SignIn'
import { Appbar } from './components/Appbar'
import { SendMoney } from './components/Send'
function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/dashboard" element={<Appbar/>}></Route>
            <Route path="/send" element={<SendMoney/>}></Route>
          </Routes>
          
        </BrowserRouter>
    </>
  )
}

export default App
