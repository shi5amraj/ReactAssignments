import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import{Route,Routes} from "react-router-dom";
import Search from './Components/Search';
import SongDetails from './Components/SongDetails';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <SideBar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/lib' element={<Home/>}/>
        <Route path='/playlist' element={<Home/>}/>
        <Route path='/likedsong' element={<Home/>}/>
        <Route path='/songdetails' element={<SongDetails/>}/>
        <Route path="*" element={<PageNotFound/>}></Route>
        </Routes> 

      
    </div>
  );
}

export default App;
