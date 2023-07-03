import "./App.css";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Techniques from "./components/Techniques";
import Content from "./pages/Content";
import Genre from "./pages/Genre/Genre";
import { GENRES } from "./utility/genres";

function App() {
  return (
    <>
      <NavBar />
      <Content />
    </>
  );
}

export default App;
