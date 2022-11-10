import './App.css'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router basename="/creative-project-3/build/">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="home" exact element={<Home />}/>  
          <Route path="menu" exact element={<Menu />}/>
          <Route path="contact" exact element={<Contact />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
