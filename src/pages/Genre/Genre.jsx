import { useState } from "react";
import Intro from "../../components/Intro/Intro";
import NewTextPost from "../../components/Posts/NewTextPost/NewTextPost";
import NewVideoPost from "../../components/Posts/NewVideoPost/NewVideoPost";
import TextPosts from "../../components/Posts/TextPost/TextPosts";
import VideoPosts from "../../components/Posts/VideoPost/VideoPosts";
import Techniques from "../../components/Techniques";
import classes from "./Genre.module.css";
import { Button, Typography, Upload } from "antd";
import { GENRES } from "../../utility/genres";
import { ReactComponent as UploadSvg } from "../../assets/upload.svg";
const { Text } = Typography;

const Genre = ({ genre }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTextModal, setShowTextModal] = useState(false);
  const [showAddEditTechniquesModal, setShowAddEditTechniquesModal] =
    useState(false);
  const handleOnAddTechniquesClicked = () => {
    return "";
  };
  return (
    <div className={classes.genre}>
      <div className={classes.header}>
        <h1 class="mr-5">{genre}</h1>
        {genre !== GENRES.OPEN ? (
          <Intro genre={genre} />
        ) : (
          <Text>A fusion of all genres!</Text>
        )}
      </div>

      <div className={classes.smallerWidgets}>
        <TextPosts />
        <div className={classes.newPostBtns}>
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
        </div>
      </div>

      <Button
        icon={<UploadSvg />}
        onClick={() => handleOnAddTechniquesClicked}
      />
      <Techniques />
      <VideoPosts />
    </div>
  );
};

export default Genre;
