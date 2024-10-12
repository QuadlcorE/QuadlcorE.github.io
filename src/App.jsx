import './App.css'
import ContactPage  from './components/Contact/ContactPage'
import Footer from './components/Footer/Footer'
import HomePage from './components/Home/Homepage'
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import ProjectsPage  from './components/Projects/Projectspage'

// Custom component to handle redirection from the query string
const QueryParamRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.search.slice(1); // Extract path from query string
    if (path) {
      navigate(path, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

function App() {

  return (
    <Router>
      <QueryParamRedirect /> {/* Redirect handler */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/project' element={<ProjectsPage/>} />
        <Route path='*' element={<HomePage/>} />
      </Routes>
    </Router>
  )
}

export default App
