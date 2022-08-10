import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Project />} path='/project' />
        
      </Routes>
    </Router>
  );
}

export default App;