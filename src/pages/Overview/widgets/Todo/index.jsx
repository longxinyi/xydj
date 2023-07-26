import { Button, Form, Input, List, Checkbox } from "antd";

const AddTodo = () => {
  return (
    <Form>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Unable to add empty task!",
          },
        ]}
      >
        <Input placeholder="What's next?" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          + Add
        </Button>
      </Form.Item>
    </Form>
  );
};

const Todo = () => {
  return (
    <>
      <AddTodo />
      <List>
        {DUMMY_DATA.map((todo) => {
          <Checkbox>{todo.name}</Checkbox>;
        })}
      </List>
    </>
  );
};

const DUMMY_DATA = () => [{ name: "check this off" }, { name: "22" }];

export default Todo;
