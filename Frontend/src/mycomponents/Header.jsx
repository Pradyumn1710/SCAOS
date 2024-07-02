import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import LogoClear from '../Resources/Logo_clear.png'; // Adjust the import path

const Header = () => {
  return (
    <div className="bg-gray-200 py-1.8 px-6 flex justify-between">
      <div className="flex items-center space-x-4">
        <img src='' alt="Logo" className="h-14" /> {/* Use LogoClear variable */}
        <div className="text-xl font-bold text-slate-600 ">SCOAS</div>
      </div>
      <AppBar />
    </div>
  );
};

function AppBar() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/Admin');
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  const handleServicesClick = () => {
    navigate('/Services');
  };

  const handleBookClick = () => {
    navigate('/Book');
  };

  return (
    <div className="flex space-x-4 m-1 p-1">
      <button
        className="hover:underline hover:underline-offset-4 hover:text-slate-400 pr-2"
        onClick={handleHomeClick}
      >
        Home
      </button>
      <button
        className="hover:underline hover:underline-offset-4 hover:text-slate-400 pr-2"
        onClick={handleServicesClick}
      >
        Services
      </button>
      <button
        className="hover:underline hover:underline-offset-4 hover:text-slate-400 pr-2"
        onClick={handleServicesClick}
      >
        Contact us
      </button>
      <button
        className="bg-slate-500 hover:bg-slate-600 text-white py px-2 h-9 mt-2 mb-2 rounded-xl"
        onClick={handleBookClick}
      >
        Book
      </button>
    </div>
  );
}

export default Header;
