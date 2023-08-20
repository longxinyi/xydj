import { Carousel } from "antd";
import BPCrown from "../../../../assets/BPCrown.png";
import heelsIcon from "../../../../assets/headerPics/heelsIcon.png";
import classes from "./index.module.css";

const PicCarousel = () => {
  return (
    <Carousel autoplay className={classes.picCarousel}>
      <img src={BPCrown} style={{ height: "58px", width: "340px" }} />
      <img src={heelsIcon} style={{ height: "58px", width: "340px" }} />
    </Carousel>
  );
};

export default PicCarousel;
