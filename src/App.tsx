import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import Toast from './components/Toast';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Team from './pages/Team';
import About from './pages/About';
import Achievements from './pages/Achievements';
import JoinUs from './pages/JoinUs';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
  } | null>(null);
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App