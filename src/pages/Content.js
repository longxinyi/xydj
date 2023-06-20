import { Route, Routes } from "react-router-dom";
import {
  overviewPath,
  hiphopPath,
  girlsstylePath,
  heelsPath,
  streetjazzPath,
  openPath,
} from "../utility/urlConfig/routingPaths";
import Overview from "./Overview";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path={overviewPath} element={Overview}></Route>
      </Routes>
    </div>
  );
};

export default Content;
