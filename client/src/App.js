import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
import Detail from "./Pages/Detail/index";

function App() {
  return (
    <div className="App">
      <header></header>
      <NavBar/>
      <main>
      <Routes>
        <Route exact path='/' element ={<Landing/>}/>
        <Route exact path='/home' element ={<Home/>}/> 
        <Route exact path='/detail/:restoId' element ={<Detail/>}/>
      </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

