import { GlobalStyles, AppContainer } from "./styles/Global";

import Navbar from "./components/navbar/Navbar";
import AnimatedRoutes from "./components/routes/AnimatedRoutes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navbar />

        <AnimatedRoutes />
      </AppContainer>
    </Router>
  );
}

export default App;
