import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../components/layout/Layout';
import DragonBall from '../pages/DragonBall-Home/DragonBall';
import Planets from '../pages/planets/Planets';
import Transformations from "../pages/transformations/Transformations";
import OriginPlanet from "../pages/origin-planet/OriginPlanet";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DragonBall />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/character/transformations/:id" element={<Transformations />} />
        <Route path="/planets/:id/characters" element={<OriginPlanet />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
