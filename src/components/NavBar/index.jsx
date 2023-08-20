import { useState } from "react";
import { Menu } from "antd";
import Icon from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  DownOutlined,
  ShareAltOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import crown from "assets/BPCrown.png";
import {
  overviewPath,
  hiphopPath,
  heelsPath,
  polePath,
  openPath,
} from "utility/urlConfig/routingPaths";
import classes from "./index.module.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(overviewPath);
  const items = [
    {
      label: "Overview",
      icon: <HomeOutlined />,
      key: overviewPath,
    },
    {
      label: "Genres",
      key: "genres",
      icon: <DownOutlined />,
      children: [
        {
          label: "Hip Hop",
          key: hiphopPath,
        },
        {
          label: "Heels",
          key: heelsPath,
        },
        {
          label: "Pole",
          key: polePath,
        },
        {
          label: "Open",
          key: openPath,
        },
      ],
    },
  ];

  return (
    <Menu
      mode="horizontal"
      items={items}
      selectedKeys={[current]}
      defaultSelectedKeys={[current]}
      onClick={({ key }) => {
        navigate(key);
        setCurrent(key);
      }}
      className={classes.navBar}
    >
      <Icon component={() => <img src={crown} />}></Icon>
    </Menu>
  );
};

export default NavBar;
