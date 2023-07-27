import { Dropdown, Button, Space } from "antd";
import {
  DownOutlined,
  FileTextOutlined,
  VideoCameraOutlined,
  FileAddOutlined,
} from "@ant-design/icons";
import NewTextPost from "components/Posts/NewTextPost";
import NewVideoPost from "components/Posts/NewVideoPost";
import { useState } from "react";

const NewPostButton = () => {
  const [showTextModal, setShowTextModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const items = [
    {
      label: "Text Post",
      key: "1",
      icon: <FileTextOutlined />,
    },
    {
      label: "Video Post",
      key: "2",
      icon: <VideoCameraOutlined />,
    },
  ];

  const handleMenuClick = (e) => {
    if (e.key === 1) {
      setShowTextModal(true);
    }
    if (e.key === 2) {
      setShowVideoModal(true);
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            <FileAddOutlined />
            Add
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      {showTextModal && <NewTextPost setShowTextModal={setShowTextModal} />}
      {showVideoModal && <NewVideoPost setShowVideoModal={setShowVideoModal} />}
    </>
  );
};

export default NewPostButton;
