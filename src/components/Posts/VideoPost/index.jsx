import { Table, Space, Button, Card } from "antd";
import { useState } from "react";
import { VideosData } from "assets/dummyData";
import VideoPlayer from "react-video-js-player";
import { PlusOutlined } from "@ant-design/icons";
import classes from "./index.module.css";

const VideoPosts = ({ onAddClicked }) => {
  const [videos, setVideos] = useState(VideosData);

  const columns = [
    {
      title: "Song Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
    },
    {
      title: "Choreographer",
      dataIndex: "choreographer",
      key: "choreographer",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (tutorial, { key }) => (
        <Space size="middle">
          <a href={tutorial} target="_blank" rel="noopener noreferrer">
            Tutorial
          </a>
          <Button
            onClick={(e) => {
              onDelete(key, e);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const onDelete = (key, e) => {
    e.preventDefault();
    const data = videos.filter((data) => data.key !== key);
    setVideos(data);
  };
  return (
    <Card
      title={
        <div className={classes.tableTitle}>
          Videos
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => onAddClicked(true)}
            className={classes.addButton}
          />
        </div>
      }
    >
      <Table
        columns={columns}
        // expandable={{
        //   expandedRowRender: (record) => (
        //     <VideoPlayer
        //       src={record.video}
        //       width="720"
        //       height="420"
        //       controls={true}
        //     />
        //   ),
        // }}
        dataSource={videos}
      />
    </Card>
  );
};

export default VideoPosts;
