import { Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from './components/Home'
import Footer from './components/Footer';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Teamstructure from './components/pages/Teamstructure';
import Duediligence from './components/pages/Duediligence'
import Implementation from './components/pages/Implementation'
import Bau from './components/pages/Bau'
import Specialistservices from './components/pages/Specialistservices'
import Specialevents from './components/pages/Specialevents'
import Diagnostic from "./components/pages/Diagnostic";
import Visioncmpny from "./components/pages/Visioncmpny";
import SuccessFactors from "./components/pages/SuccessFactors";
import Founder from "./components/pages/Founder"
import Team from "./components/pages/Team"
import './App.css';

function App() {
  return (
    <>
  <Header />
   <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/contactus" element={ <Contactus />}/>
    <Route path="/aboutus" element={ <Aboutus />}/>
    <Route path="/teamstructure" element={ <Teamstructure />}/>
    <Route path="/duediligence" element={ <Duediligence />}/>
    <Route path="/implementation" element={ <Implementation />}/>
    <Route path="/bau" element={ <Bau />}/>
    <Route path="/specialist-services" element={ <Specialistservices />}/>
    <Route path="/special-events" element={ <Specialevents />}/>
    <Route path="/digno_stick" element={ <Diagnostic />}/>
    <Route path="/Visioncmpny" element={ <Visioncmpny />}/>
    <Route path="/SuccessFactors" element={ <SuccessFactors />}/>
    <Route path="/Founder" element={ <Founder />}/>
    <Route path="/Team" element={ <Team />}/>
    
   </Routes>
  <Footer />

    </>
  );
}

export default App;
