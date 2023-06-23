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
import { GENRES } from "../utility/genres";
import Genre from "./Genre/Genre";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path={overviewPath} index element={<Overview />}></Route>
        <Route
          path={hiphopPath}
          element={<Genre genre={GENRES.HIPHOP} />}
        ></Route>
        <Route
          path={heelsPath}
          element={<Genre genre={GENRES.HEELS} />}
        ></Route>
        <Route
          path={streetjazzPath}
          element={<Genre genre={GENRES.STREETJAZZ} />}
        ></Route>
        <Route
          path={girlsstylePath}
          element={<Genre genre={GENRES.GIRLSSTYLE} />}
        ></Route>
        <Route path={openPath} element={<Genre genre={GENRES.OPEN} />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
