import { useState } from "react";
import { Menu } from "antd";
import Icon from "@ant-design/icons";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import {
  HomeOutlined,
  DownOutlined,
  ShareAltOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import crown from "../../assets/BPCrown.png";
import {
  overviewPath,
  hiphopPath,
  heelsPath,
  streetjazzPath,
  polePath,
  openPath,
} from "../../utility/urlConfig/routingPaths";

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
          label: "Street Jazz",
          key: streetjazzPath,
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
    {
      label: (
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          Tiktok
        </a>
      ),
      key: "tiktok",
      icon: <ShareAltOutlined />,
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
    >
      {/* <Icon component={() => <img src="`${crown}`" />}></Icon> */}
    </Menu>
  );
};

export default NavBar;
