import { Button, Modal, Form, Input, DatePicker, Select } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const NewTextPost = ({ genre }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("Creating Post...");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
    //send data to firebase
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        New Text Post
      </Button>

      <Modal
        title="Jot your thoughts down!"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
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
                <Select.Option value="girlsStyle">Girls Style</Select.Option>
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
    </>
  );
};

export default NewTextPost;
