
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';
import Container from "./components/Container/Container";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <AboutMe />
        <Projects />
      </Container>

      <Contact/>

    </>
  );
}

export default App;
