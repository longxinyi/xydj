import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Card } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { TechniquesData } from "assets/dummyData";
import { PlusOutlined } from "@ant-design/icons";
import classes from "./index.module.css";

const Techniques = ({ onAddClicked }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [techniquesData, setTechniquesData] = useState(TechniquesData);
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      width: "50%",
    },
    {
      title: "Action",
      dataIndex: "tutorial",
      key: "x",
      width: "40%",
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
    const data = techniquesData.filter((data) => data.key !== key);
    setTechniquesData(data);
  };

  return (
    <Card
      title={
        <div className={classes.tableTitle}>
          Techniques
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
        dataSource={techniquesData}
        bordered
        pagination
      />
    </Card>
  );
};

export default Techniques;
