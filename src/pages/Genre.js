import Intro from "../components/Intro";
import NewTextPost from "../components/Posts/NewTextPost";
import NewVideoPost from "../components/Posts/NewVideoPost";
import Techniques from "../components/Techniques";

const Genre = ({ genre }) => {
  return (
    <>
      <h2>{genre}</h2>
      <Intro genre={genre} />
      <Techniques />

      <NewTextPost genre={genre} />
      <NewVideoPost genre={genre} />
    </>
  );
};

export default Genre;
