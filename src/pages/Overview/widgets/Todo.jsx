import { Card, Table, Form, Input, Select } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
  },
];

const DUMMY_CHOREOS = [
  {
    name: "7/11",
    genre: "hiphop",
  },
  {
    name: "1111",
    genre: "1112",
  },
];

const Todo = () => {
  [todoList, setTodoList] = useState(DUMMY_CHOREOS);
  const handleAddTodo = (e) => {
    setTodoList([...DUMMY_CHOREOS, e.target.value]);
  };
  return (
    <Card>
      <Form>
        <Form.Item>
          <Input placeholder="What's next?" />
        </Form.Item>
        <Form.Item>
          <Select>
            <Select.Option value="hiphop">Hip Hop</Select.Option>
            <Select.Option value="heels">Heels</Select.Option>
            <Select.Option value="streetjazz">Street Jazz</Select.Option>
            <Select.Option value="pole">Pole</Select.Option>
            <Select.Option value="open">Open</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onSubmit={() => handleAddTodo}
          >
            Add
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={todoList} />
    </Card>
  );
};

export default Todo;
