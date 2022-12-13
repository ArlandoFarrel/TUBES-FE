// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Index from './components/Index';
import Ourteam from './components/Ourteam';
import Detail from './components/Detail';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Index' element={<Index />} />
          <Route path='/Ourteam' element={<Ourteam />} />
          <Route path='/Detail' element={<Detail />} />
          <Route path='/Calculator' element={<Calculator />} />
        </Routes>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/Index'>Index</Link>
          <Link to='/Ourteam'>Ourteam</Link>
          <Link to='/Detail'>Detail</Link>
          <Link to='/Calculator'>Calculator</Link>
          
        </div>
      </Router>
    
     
    
    </div>
  );
}

export default App;
