import { Modal, Form, DatePicker, Select, Input } from "antd";
import { useState } from "react";

const NewTechniques = ({ genre, setShowTechniquesModal }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // const showModal = () => {
  //   setOpen(true);
  // };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setShowTechniquesModal(false);
      setConfirmLoading(false);
    }, 2000);
    //send data to firebase
  };
  return (
    <Modal
      title="New Technique Learnt?"
      open={true}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={() => setShowTechniquesModal(false)}
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
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Notes">
          <DatePicker />
        </Form.Item>
        {genre ? (
          <Form.Item label="Genre">
            <Input placeholder={genre} disabled></Input>
          </Form.Item>
        ) : (
          <Form.Item label="Genre">
            <Select>
              <Select.Option value="hiphop">HipHop</Select.Option>
              <Select.Option value="pole">Pole</Select.Option>
              <Select.Option value="heels">Heels</Select.Option>
              <Select.Option value="open">Open</Select.Option>
              <Select.Option value="streetJazz">Street Jazz</Select.Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item label="Tutorial">
          <Input placeholder="Maybe a youtube link?" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewTechniques;
