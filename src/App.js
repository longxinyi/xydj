import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./pages/Content";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#da98a8",
        color: "#000000",
        fontFamily: "Noto Sans",
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#FFFFFF",
            colorText: "#000000",
            colorBorderSecondary: "#da98a8",
            fontFamily: "Noto Sans",
            fontSize: 16,
          },
          components: {
            Menu: {
              colorBgContainer: "#000000",
              subMenuItemBg: "#da98a8",
              itemSelectedColor: "#da98a8",
              itemColor: "#da98a8",
              itemHoverBg: "#000000",
              itemHoverColor: "#e094a7",
              itemSelectedBg: "#6a3a45",
            },
          },
        }}
      >
        <NavBar />
        <Content />
      </ConfigProvider>
    </div>
  );
}

export default App;
