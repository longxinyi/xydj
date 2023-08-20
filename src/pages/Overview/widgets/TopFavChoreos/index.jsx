import PropTypes from "prop-types";
import ListSort from "utility/ListSort";
import { PlayCircleFilled } from "@ant-design/icons";
import classes from "./index.module.css";

const TopFavChoreos = () => {
  const data = [
    {
      color: "#000000",
      title: "Formation",
      text: "Heels",
    },
    {
      color: "#000000",
      title: "Trip",
      text: "Heels",
    },
    {
      color: "#000000",
      title: "Eat it",
      text: "Hip Hop",
    },
  ];

  const childrenToRender = data.map((item, i) => {
    const { color, title, text } = item;
    return (
      <div className={classes.listItem}>
        <PlayCircleFilled style={{ color: color }} />
        <p>{title}</p>
        <p>{text}</p>
      </div>
    );
  });

  return (
    <ListSort
      dragClassName="list-drag-selected"
      appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
    >
      {childrenToRender}
    </ListSort>
  );
};

export default TopFavChoreos;
