
import './App.css'
import { DatePickerDemo } from './components/ui/datepicker'
import Form from './mycomponents/Form'
import Header from './mycomponents/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './mycomponents/Home'
function App() {
  return <div >
    <BrowserRouter>
    <Routes>
      <Route></Route>
    </Routes>
    <Header></Header>
    <Home></Home>
    </BrowserRouter>
    {/* <Form ></Form> */}

  </div>
}

export default App
