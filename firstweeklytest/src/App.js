import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Bussiness from './Components/Bussiness';
import Features from './Components/Features';
import Featurehead from './Components/Featurehead';
import Featurespara from './Components/Featurespara';
import Winning from './Components/Winning';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

       <Navbar />
      <Bussiness />
      <Features />
      <Featurehead />
      <Featurespara />
      <Winning />
      <Footer />
      
    </div>
  );
}

export default App;
