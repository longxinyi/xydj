import { Table, Space, Button, Card } from "antd";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { PlusOutlined } from "@ant-design/icons";
import classes from "./index.module.css";

const VideoPosts = ({ genre, onAddClicked }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoPosts = async () => {
      const currGenre = genre.toLowerCase();
      const response = await fetch(
        `https://xydj-d088f-default-rtdb.asia-southeast1.firebasedatabase.app/videoPosts/${currGenre}.json`
      );
      const responseData = await response.json();

      const loadedVideos = [];

      for (const key in responseData) {
        loadedVideos.push({
          key: key,
          name: responseData[key].name,
          artist: responseData[key].artist,
          choreographer: responseData[key].choreographer,
          date: responseData[key].date,
          tutorial: responseData[key].link,
        });
      }
      setVideos(loadedVideos);
    };
    fetchVideoPosts();
  });

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
      title: "Action",
      dataIndex: "tutorial",
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
      className={classes.card}
    >
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <ReactPlayer url={record.video} controls={true} />
              <div>{record.notes}</div>
            </>
          ),
        }}
        dataSource={videos}
      />
    </Card>
  );
};

export default VideoPosts;
