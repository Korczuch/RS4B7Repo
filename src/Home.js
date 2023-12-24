import logo from './RS4 B7.jpg';
import './App.css';

const pageTittle = "Audi RS4 B7 Registry";

  

  const Home = () => {
    return (
        
<div className="App">
      <header className="App-header">
      <h1>{pageTittle}</h1>
        <img src={logo} className="Audi-RS4-B7-Registry-Logo" alt="logo" />
        <p3>Random car from registry, press on image to see car</p3>
      </header>
    
    </div>
    )
  }
  export default Home;