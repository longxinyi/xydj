import { Button, Form, Input, Table, Card } from "antd";

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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    name: record.name,
  }),
};

const Todo = ({ data }) => {
  return (
    <Card title="Todo List">
      <AddTodo />
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={[
          {
            dataIndex: "name",
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
