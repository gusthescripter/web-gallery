import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Post from './components/Post'
import SinglePost from './components/SinglePost'
import SingleProject from './components/SingleProject'

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Project />} path='/project' />
          <Route element={<Post />} path='/post' />
          <Route element={<SinglePost />} path='/singlepost/:id' />
          <Route element={<SingleProject />} path='/singleproject/:id' />

        
      </Routes>
    </Router>
  );
}

export default App;
