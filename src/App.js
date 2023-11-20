import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {motion} from 'framer-motion'
import MyNavbar from './Component/MyNavbar';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Offer from './pages/Offer';
import Hiking from './pages/Hiking';
import Blog from './pages/Blog';
import Footer from './pages/Footer';
import SocialIcon from './pages/SocialIcon';

function App() {
  return (
    <>
    <MyNavbar />
    <Home />
    <Popular />
    <Offer />
    <Hiking />
    <Blog />
    <SocialIcon />
    <Footer />
    </>
  );
}

export default App;
