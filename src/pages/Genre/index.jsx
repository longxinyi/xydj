import { useState } from "react";
import Intro from "components/Intro";
import NewTextPost from "components/Posts/NewTextPost";
import NewVideoPost from "components/Posts/NewVideoPost";
import TextPosts from "components/Posts/TextPost";
import VideoPosts from "components/Posts/VideoPost";
import Techniques from "components/Techniques";
import classes from "./index.module.css";
import { Button, Typography, Upload } from "antd";
import { GENRES } from "utility/genres";
import { ReactComponent as UploadSvg } from "assets/upload.svg";
const { Text } = Typography;

const Genre = ({ genre }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showAddTechniquesModal, setShowAddTechniquesModal] = useState(false);
  const handleOnAddTechniquesClicked = () => {
    setShowAddTechniquesModal(true);
  };
  return (
    <div className={classes.genre}>
      <div className={classes.header}>
        <h1>{genre}</h1>

        <Intro genre={genre} />
      </div>

      <div className={classes.smallerWidgets}>
        <TextPosts />
        <div className={classes.newPostBtns}>
          <Button type="primary" onClick={() => setShowTextModal(true)}>
            New Text Post
          </Button>

          {showTextModal && (
            <NewTextPost genre={genre} setShowTextModal={setShowTextModal} />
          )}

          <Button type="primary" onClick={() => setShowVideoModal(true)}>
            New Video Post
          </Button>

          {showVideoModal && (
            <NewVideoPost genre={genre} setShowVideoModal={setShowVideoModal} />
          )}
        </div>
      </div>

      <Button
        icon={<UploadSvg />}
        onClick={() => handleOnAddTechniquesClicked}
      />
      <Techniques />
      {/* {showAddTechniquesModal && } */}
      <VideoPosts />
    </div>
  );
};

export default Genre;
