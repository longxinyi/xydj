import { useState } from "react";
import { Card, Pagination, Button } from "antd";
import classes from "./index.module.css";
import { PlusOutlined } from "@ant-design/icons";

const TextPosts = ({ onAddClicked }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    { title: "Card title1", value: "Card content1" },
    { title: "Card title2", value: "Card content2" },
    { title: "Card title3", value: "Card content3" },
    { title: "Card title4", value: "Card content4" },
    { title: "Card title5", value: "Card content5" },
    { title: "Card title6", value: "Card content6" },
    { title: "Card title7", value: "Card content7" },
    { title: "Card title8", value: "Card content8" },
    { title: "Card title9", value: "Card content9" },
    { title: "Card title10", value: "Card content10" },
    { title: "Card title11", value: "Card content11" },
    { title: "Card title12", value: "Card content12" },
    { title: "Card title13", value: "Card content13" },
    { title: "Card title14", value: "Card content14" },
    { title: "Card title15", value: "Card content15" },
  ];

  const onChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <Card
      className={classes.textPost}
      title={
        <div className={classes.tableTitle}>
          Reflections
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => onAddClicked(true)}
            className={classes.addButton}
          />
        </div>
      }
    >
      {/* {data &&
        data.map((entry) => {
          <Card title={entry.title} style={{ width: 300 }}>
            <p>Date</p>
          </Card>;
        })} */}

      <Card title={data[currentPage - 1].title} style={{ width: 300 }}>
        <p>thoughts: {data[currentPage - 1].value}</p>
        <p>Date</p>
      </Card>

      <Pagination
        simple
        defaultCurrent={currentPage}
        defaultPageSize={1}
        total={data.length}
        onChange={onChange}
        className={classes.pagination}
      />
    </Card>
  );
};

export default TextPosts;
