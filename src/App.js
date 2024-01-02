import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AdminPanel from './adminPanel';
import avant from './avant';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/avant" element={<avant />} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
