import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Grade9Dash from './grade9/grade9dash.tsx';
import Grade10dash from './grade10/grade10dash.tsx';
import Dashboard1 from './dashboard.tsx';
import Waste from './waste.tsx';
import Grade11dash from './grade11/grade11dash.tsx';
import Grade12dash from './grade12/grade12dash.tsx';
import G12physics from './grade12/g12physics.tsx';
import G12english from './grade12/g12english.tsx';
import G12advfunctions from './grade12/g12advfunctions.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/grade9" element={<Grade9Dash />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/grade10" element={<Grade10dash />} />
        <Route path="/grade11" element={<Grade11dash />} />
        <Route path="/grade12" element={<Grade12dash />} />
        <Route path="/g12physics" element={<G12physics />} />
        <Route path="/g12english" element={<G12english />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
