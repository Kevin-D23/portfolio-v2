import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import SocialsBar from "./components/SocialsBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialsBar />
      <LandingPage />
      
      <Footer />
    </div>
  );
}

export default App;
