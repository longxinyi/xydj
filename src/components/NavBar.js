import { useState } from "react";
import { Menu } from "antd";
import { useNavigate, Route, Routes, Navigate } from "react-router-dom";
import {
  HomeOutlined,
  DownOutlined,
  ShareAltOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import {
  overviewPath,
  hiphopPath,
  heelsPath,
  streetjazzPath,
  girlsstylePath,
  openPath,
} from "../utility/urlConfig/routingPaths";
import flattenDeep from "lodash/flattenDeep";

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
          key: "hiphop",
          genre: hiphopPath,
        },
        {
          label: "Heels",
          key: "heels",
          genre: heelsPath,
        },
        {
          label: "Street Jazz",
          key: "streetJazz",
          genre: streetjazzPath,
        },
        {
          label: "Girls Style",
          key: "girlsStyle",
          genre: girlsstylePath,
        },
        {
          label: "Open",
          key: "open",
          route: openPath,
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
    {
      label: "New Post",
      key: "newPost",
      icon: <PlusOutlined />,
      children: [
        {
          label: "Video",
          key: "video",
        },
        {
          label: "Text",
          key: "text",
        },
      ],
    },
  ];

  return (
    <Menu
      mode="horizontal"
      items={items}
      selectedKeys={[current]}
      onClick={({ key }) => {
        navigate(key);
      }}
    />
  );
};

export default NavBar;
