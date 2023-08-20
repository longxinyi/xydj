import { Button, Modal, Form, Input, DatePicker, Select, Upload } from "antd";
import { useState, useEffect } from "react";
const { TextArea } = Input;

const NewVideoPost = ({ genre, setShowVideoModal }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const baseState = {
    title: "",
    date: undefined,
    file: undefined,
    thoughts: "",
  };

  const [videoPost, setVideoPost] = useState(baseState);

  const handleOk = async () => {
    setShowVideoModal(false);
    const currGenre = genre.toLowerCase();
    await fetch(
      `https://xydj-d088f-default-rtdb.asia-southeast1.firebasedatabase.app/videoposts/${currGenre}.json`,
      {
        method: "POST",
        body: JSON.stringify(videoPost),
      }
    );
  };

  useEffect(() => {
    if (
      videoPost.title !== "" &&
      videoPost.date !== undefined &&
      videoPost.thoughts !== "" &&
      videoPost.file !== undefined
    ) {
      setIsBtnDisabled(false);
    }
  }, [videoPost]);

  const onChangeTitleHandler = (e) => {
    const newVideoPost = {
      ...videoPost,
      title: e.target.value,
    };
    setVideoPost(newVideoPost);
  };
  const onChangeDateHandler = (e) => {
    const newVideoPost = {
      ...videoPost,
      date: e,
    };
    setVideoPost(newVideoPost);
  };
  const onChangeThoughtsHandler = (e) => {
    const newVideoPost = {
      ...videoPost,
      thoughts: e.target.value,
    };
    setVideoPost(newVideoPost);
  };
  const onChangeFileHandler = (e) => {
    const newVideoPost = {
      ...videoPost,
      file: e,
    };
    setVideoPost(newVideoPost);
  };

  return (
    <div>
      <Modal
        title="Upload a Dance Prac!"
        open={true}
        onOk={handleOk}
        onCancel={() => setShowVideoModal(false)}
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
            <Input onChange={onChangeTitleHandler} />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker onChange={onChangeDateHandler} />
          </Form.Item>

          <Form.Item label="Genre">
            <Input placeholder={genre} disabled></Input>
          </Form.Item>

          <Upload
            //className="mt-3 mb-3"
            accept=".mp4"
            //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            onChange={onChangeFileHandler}
          >
            <Button>Upload</Button>
          </Upload>

          <Form.Item label="Thoughts">
            <TextArea rows={4} onChange={onChangeThoughtsHandler} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NewVideoPost;
