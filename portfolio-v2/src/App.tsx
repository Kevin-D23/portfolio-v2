import "./App.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ProjectsPage />
      <AboutPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
