import { Button, Form, Input, Table, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import classes from "./index.module.css";

const AddTodo = () => {
  return (
    <Form className={classes.addTodo}>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Unable to add empty task!",
          },
        ]}
        className={classes.inputBar}
      >
        <Input placeholder="what's next?" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          + Add
        </Button>
      </Form.Item>
    </Form>
  );
};

const TodoItem = ({ record }) => {
  const handleOnClick = () => {
    console.log("set to completed");
    //change status of todo item to false and send to backend
  };
  return (
    <div className={classes.todoItem}>
      <p>{record.name}</p>
      <Button
        icon={<CheckOutlined style={{ color: "#da98a8" }} />}
        onClick={handleOnClick}
      />
    </div>
  );
};

const Todo = ({ data }) => {
  return (
    <Card title="Todo List" className={classes.todoList}>
      <AddTodo />
      <Table
        columns={[
          {
            key: "item",
            render: (record) => <TodoItem record={record} />,
          },
        ]}
        dataSource={data}
        pagination={false}
        scroll={{
          y: 100,
        }}
      />
    </Card>
  );
};

export default Todo;
