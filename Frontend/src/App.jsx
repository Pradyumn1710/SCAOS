import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './mycomponents/Header';
import Home from './mycomponents/Home';
import Form from './mycomponents/Form'; // Adjust path as per your actual structure

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
