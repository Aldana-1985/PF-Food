import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import Home from './pages/Home/index'
import Landing from "./pages/Landing/index";
import NavBar from "./Components/NavBar/index";
// importar componentes
=======
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Error404 from "./Pages/404";
import Detail from "./Pages/Detail/index";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing/index.jsx";
>>>>>>> 2c3a6891f3941899bdcb726be1eb156968332dbf
function App() {

  const location = useLocation()

  return (
    <div className="app">
      {
       location.pathname !== "/" && <header>
        <Header/>
      </header>
      }
      <main className="main">
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/detail/:restoId' element={<Detail />} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
    
  );
}

export default App;