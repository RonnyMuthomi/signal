
import {Routes,Route} from 'react-router-dom'
import  Home from './components/Pages/Home'
import  Dashboard from './components/Pages/Dashboard'
import  Language from './components/Pages/Language';
import  Browse from './components/Pages/Browse';
import  Career from './components/Pages/Career';
import  Activities from './components/Pages/Activities';
import Spaces from './components/Pages/Spaces'
import Header from "./components/mincomponents/Header";
import Navbar from "./components/mincomponents/Navbar";

export default function App() {
  return (
    <>
     <Header/>
     <Navbar/>

     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Language" element={<Language/>}/>
        <Route path="/Browse" element={<Browse/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Activities" element={<Activities/>}/>
        <Route path="/Spaces" element={<Spaces/>}/>
     </Routes>
    </>
  )
}
