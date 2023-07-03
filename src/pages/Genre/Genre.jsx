import { useState } from "react";
import Intro from "../../components/Intro/Intro";
import NewTextPost from "../../components/Posts/NewTextPost/NewTextPost";
import NewVideoPost from "../../components/Posts/NewVideoPost/NewVideoPost";
import TextPosts from "../../components/Posts/TextPosts";
import VideoPosts from "../../components/Posts/VideoPosts";
import Techniques from "../../components/Techniques";
import classes from "./Genre.module.css";
import { Button } from "antd";

const Genre = ({ genre }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  return (
    <div>
      <div className={classes.header}>
        <h1 class="mr-5">{genre}</h1>
        <Intro genre={genre} />
      </div>

      <Techniques />

      <Button type="primary" onClick={() => setShowTextModal(true)}>
        New Text Posts
      </Button>

      {showTextModal && (
        <NewTextPost genre={genre} setShowTextModal={setShowTextModal} />
      )}

      <Button type="primary" onClick={() => setShowVideoModal(true)}>
        New Video Posts
      </Button>

      {showVideoModal && (
        <NewVideoPost genre={genre} setShowVideoModal={setShowVideoModal} />
      )}

      <VideoPosts />
      <TextPosts />
    </div>
  );
};

export default Genre;
