import { AppProvider } from "./context/activeLink";
import Home from "./pages/home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
