import { GlobalStyles } from "./styles/Global";
import { AppContainer } from "./styles/Global";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <Home />
    </AppContainer>
  );
}

export default App;
