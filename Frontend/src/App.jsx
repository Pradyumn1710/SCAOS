import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './mycomponents/Homepage/Header';
import Homepage from './Pages/Homepage';
import Form from './mycomponents/other/Form'; // Adjust path as per your actual structure
import StampPad from './mycomponents/Admin/Quotation';
import AdminDashboard from './mycomponents/Admin/Admin';
import GenerateBill from './mycomponents/Admin/generate-bill/GenerateBill';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/generate" element={<GenerateBill />} />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
