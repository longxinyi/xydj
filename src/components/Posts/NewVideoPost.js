import { Button, Modal, Form, Input, DatePicker, Select, Upload } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const NewVideoPost = () => {
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
        New Video Post
      </Button>

      <Modal
        title="Upload a dance prac!"
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
          <Upload
            //className="mt-3 mb-3"
            accept=".mp4"
            //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            //onChange={handleChange}
          >
            <Button>Upload</Button>
          </Upload>

          <Form.Item label="Thoughts">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewVideoPost;
