import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Verify from './components/Verify';
import Details from './components/Details';
import Card from './components/Card';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="verify" element={<Verify />} />
      <Route path="details" element={<Details />} />
      <Route path="card" element={<Card />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
