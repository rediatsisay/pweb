import Navbar from "./components/navbar";
import Home from "./components/home";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
