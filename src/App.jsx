import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import { Services } from './pages/Services/Services';
import { Resume } from './pages/Resume/Resume';
import { Contact } from './pages/Contact/Contact';
import { Work } from './pages/Work/Work';
import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
