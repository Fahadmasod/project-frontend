import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { register } from './serviceWorkerRegistration';
import './App.css';
import { WalimaProvider } from '../src/WalimaContext'; // <-- Import the provider

function App() {
  register();
  return (
    <WalimaProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </WalimaProvider>
  );
}

export default App;
