import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './mycomponents/Homepage/Header';
import Homepage from './Pages/Homepage';
import Form from './mycomponents/other/Form'; // Adjust path as per your actual structure
import StampPad from './mycomponents/Admin/Quotation';
import AdminDashboard from './Pages/Admin';
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
      
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/generate" element={<GenerateBill />} />
  
    </div>
  );
}

export default App;
