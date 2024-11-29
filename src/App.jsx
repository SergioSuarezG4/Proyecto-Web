import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css';
import Planets from './pages/planets/Planets';
import DragonBall from './pages/DragonBall-Home/DragonBall';
import Transformations from "./pages/transformations/Transformations";
import Layout from './components/layout/Layout';
import './components/planets/CardPlanet.css'
import './components/characters/CardCharacter.css'
import OriginPlanet from "./pages/origin-planet/OriginPlanet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Layout />}>
          <Route index element={<DragonBall />} />
          <Route path='/planets' element={<Planets />} /> 
          <Route path='/character/transformations/:id' element={<Transformations/>}></Route>
          <Route path='planets/:id/characters' element={<OriginPlanet></OriginPlanet>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
