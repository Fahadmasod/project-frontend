import { Route, Routes } from "react-router-dom"

import Home from './components/Home'

import { register } from './serviceWorkerRegistration'; // ✅ Correct import
import './App.css';

function App() {
  register(); // ✅ Correct usage
  return (
    <>
  {/* <Header /> */}
   <Routes>
    <Route path="/" element={ <Home />}/>
    {/* <Route path="/contactus" element={ <Contactus />}/>
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
    <Route path="/Team" element={ <Team />}/> */}
    
   </Routes>
  {/* <Footer /> */}

    </>
  );
}

export default App;
