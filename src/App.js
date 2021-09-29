import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import { navigationLinks } from "./data/navigationLinks.json";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation navigationLinks={navigationLinks} />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
