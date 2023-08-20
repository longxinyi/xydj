import { Route, Routes } from "react-router-dom";
import {
  overviewPath,
  hiphopPath,
  heelsPath,
  streetjazzPath,
  openPath,
  polePath,
} from "utility/urlConfig/routingPaths";
import Overview from "./Overview";
import { GENRES } from "utility/genres";
import Genre from "./Genre";

const DUMMY_DATA = [
  { name: "check this off", completed: false },
  { name: "22", completed: false },
];

const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          path={overviewPath}
          element={<Overview data={DUMMY_DATA} />}
        ></Route>
        <Route
          path={hiphopPath}
          element={<Genre genre={GENRES.HIPHOP} />}
        ></Route>
        <Route
          path={heelsPath}
          element={<Genre genre={GENRES.HEELS} />}
        ></Route>
        <Route path={polePath} element={<Genre genre={GENRES.POLE} />}></Route>
        <Route path={openPath} element={<Genre genre={GENRES.OPEN} />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
