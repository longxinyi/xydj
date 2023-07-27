import PropTypes from "prop-types";
import ListSort from "utility/ListSort";
import { PlayCircleFilled } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";

const TopFavChoreos = () => {
  const data = [
    {
      icon: `${(<PlayCircleFilled />)}`,
      color: "#000000",
      title: "Formation",
      text: "Heels",
    },
    {
      icon: `${(<PlayCircleFilled />)}`,
      color: "#000000",
      title: "Trip",
      text: "Heels",
    },
    {
      icon: `${(<PlayCircleFilled />)}`,
      color: "#000000",
      title: "Eat it",
      text: "Hip Hop",
    },
  ];

  return (
    <ListSort
      dragClassName="list-drag-selected"
      appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
    >
      {data.map((item) => {
        <div>
          <Icon type={item.icon} style={item.color} />
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>;
      })}
    </ListSort>
  );
};

export default TopFavChoreos;
