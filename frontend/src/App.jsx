import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './landing/Home';



import { useState } from 'react';
import LandingModal from './landing/LandingModal';
import Index from './landing/Index';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';

function App() {
  const [showModal, setShowModal] = useState(true);
  const location = useLocation();

  // Define routes where modal should appear
  const modalRoutes = ['/', '/affordable', '/luxury'];

  // Show modal only if current path is in modalRoutes
  const shouldShowModal = modalRoutes.includes(location.pathname) && showModal;

  return (
    <>
     
      {shouldShowModal && (
        <LandingModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/affordable" element={<Home />} />
        <Route path="/luxury" element={<Index />} />
       
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
    </>
  );
}

export default App;
