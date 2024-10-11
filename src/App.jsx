import './App.css'
import ContactPage  from './components/Contact/ContactPage'
import Footer from './components/Footer/Footer'
import HomePage from './components/Home/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectsPage  from './components/Projects/Projectspage'

function App() {

  return (
    <Router>
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
