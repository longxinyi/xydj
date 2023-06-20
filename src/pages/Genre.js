import Intro from "../components/Intro";
import NewTextPost from "../components/Posts/NewTextPost";
import NewVideoPost from "../components/Posts/NewVideoPost";
import TextPosts from "../components/Posts/TextPosts";
import VideoPosts from "../components/Posts/VideoPosts";
import Techniques from "../components/Techniques";

const Genre = ({ genre }) => {
  return (
    <>
      <h2>{genre}</h2>
      <Intro genre={genre} />
      <Techniques />

      <NewTextPost genre={genre} />
      <NewVideoPost genre={genre} />
      <VideoPosts />
      <TextPosts />
    </>
  );
};

export default Genre;
