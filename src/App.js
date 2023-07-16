//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';//added
//import Button from 'react-bootstrap/Button';//added
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
</Routes>
    </div>
  );
}

export default App;
