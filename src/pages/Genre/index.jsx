import { useState } from "react";
import Intro from "components/Intro";
import NewTextPost from "components/Posts/NewTextPost";
import NewVideoPost from "components/Posts/NewVideoPost";
import NewTechniques from "components/Techniques/NewTechniques";
import TextPosts from "components/Posts/TextPost";
import VideoPosts from "components/Posts/VideoPost";
import Techniques from "components/Techniques";
import classes from "./index.module.css";

const Genre = ({ genre }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showTechniquesModal, setShowTechniquesModal] = useState(false);

  return (
    <div className={classes.genre}>
      <div className={classes.header}>
        <h1>{genre}</h1>

        <Intro genre={genre} />
      </div>

      <div className={classes.smallerWidgets}>
        <div className={classes.table}>
          <TextPosts genre={genre} onAddClicked={setShowTextModal} />
        </div>

        {showTextModal && (
          <NewTextPost genre={genre} setShowTextModal={setShowTextModal} />
        )}

        <div className={classes.table}>
          <Techniques onAddClicked={setShowTechniquesModal} genre={genre} />
        </div>

        {showTechniquesModal && (
          <NewTechniques
            genre={genre}
            setShowTechniquesModal={setShowTechniquesModal}
          />
        )}
      </div>

      <div className={classes.table}>
        <VideoPosts genre={genre} onAddClicked={setShowVideoModal} />
      </div>

      {showVideoModal && (
        <NewVideoPost genre={genre} setShowVideoModal={setShowVideoModal} />
      )}
    </div>
  );
};

export default Genre;
