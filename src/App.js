import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Content from "./pages/Content";

function App() {
  return (
    <div
      style={{
        //backgroundColor: "black",
        color: "#da98a8",
      }}
    >
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
