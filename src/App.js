import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./pages/Content";

function App() {
  return (
    <div
      style={{
        //backgroundColor: "black",
        color: "#da98a8",
        colorBgContainer: "#000000",
      }}
    >
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
