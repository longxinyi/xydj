import { Button, Modal, Form, Input, DatePicker, Select } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const NewTextPost = ({ genre, setShowTextModal }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // const showModal = () => {
  //   setOpen(true);
  // };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setShowTextModal(false);
      setConfirmLoading(false);
    }, 2000);
    //send data to firebase
  };
  // const handleCancel = () => {
  //   console.log("Clicked cancel button");
  //   setOpen(false);
  // };
  return (
    <div>
      <Modal
        title="Jot your thoughts down!"
        open={true}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setShowTextModal(false)}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Title">
            <Input />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker />
          </Form.Item>
          {genre ? (
            <Form.Item label="Genre">
              <Input placeholder={genre} disabled></Input>
            </Form.Item>
          ) : (
            <Form.Item label="Genre">
              <Select>
                <Select.Option value="general">General</Select.Option>
                <Select.Option value="hiphop">HipHop</Select.Option>
                <Select.Option value="pole">Pole</Select.Option>
                <Select.Option value="heels">Heels</Select.Option>
                <Select.Option value="open">Open</Select.Option>
                <Select.Option value="streetJazz">Street Jazz</Select.Option>
              </Select>
            </Form.Item>
          )}
          <Form.Item label="Thoughts">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NewTextPost;
