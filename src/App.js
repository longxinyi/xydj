import "./App.css";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Techniques from "./components/Techniques";
import Content from "./pages/Content";
import Genre from "./pages/Genre";
import { GENRES } from "./utility/genres";

function App() {
  // return (
  //   <>
  //     <NavBar />
  //     <Content />
  //   </>
  // );
  return <Genre genre={GENRES.HIPHOP}></Genre>;
}

export default App;
