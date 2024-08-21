import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
// import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Gallery /> */}
      <About />
      <Form />
      <Footer />
    </>
  );
}

export default App;
