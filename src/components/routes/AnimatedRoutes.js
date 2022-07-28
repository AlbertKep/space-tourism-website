import Home from "../../pages/Home";
import Destination from "../../pages/Destination";
import Crew from "../../pages/Crew";
import Technology from "../../pages/Technology";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element="Home" />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
