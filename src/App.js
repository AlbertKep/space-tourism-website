import { GlobalStyles, AppContainer } from "./styles/Global";
// import { AppContainer } from "./styles/Global";

// import { AppContainer } from "./styles/Global";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        {/* <nav>
          <ul>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element="Home" />
        </Routes>
        {/* <Home /> */}
      </AppContainer>
    </Router>
  );
}

export default App;
