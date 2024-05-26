import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
    <Header />
    <>
    <Outlet />
    </>
    <Footer />
    </>
  )
}

export default App
