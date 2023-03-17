import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MidContent from './Components/MidContent';
import BottomContent from './Components/BottomContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MidContent/>
      <BottomContent/>
      
    </div>
  );
}

export default App;
