import Todo from "./widgets/Todo";
//import TopFavChoreos from "./widgets/TopFavChoreos";
import TextPosts from "components/Posts/TextPost";
import PicCarousel from "./widgets/PicCarousel";
//import SearchBar from "./widgets/SearchBar";
import classes from "./index.module.css";

const Overview = () => {
  return (
    <div className={classes.background}>
      <div className={classes.column}>
        <Todo />
        <div className={classes.row}>
          <TextPosts />
          <PicCarousel />
        </div>
      </div>
    </div>
  );
};
export default Overview;
