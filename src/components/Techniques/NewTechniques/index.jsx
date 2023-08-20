import { Modal, Form, Input } from "antd";
import { useState, useEffect } from "react";

const NewTechniques = ({ genre, setShowTechniquesModal }) => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const baseState = {
    name: "",
    notes: "",
    link: "",
  };

  const [technique, setTechnique] = useState(baseState);

  const handleOk = async () => {
    setShowTechniquesModal(false);

    const currGenre = genre.toLowerCase();
    await fetch(
      `https://xydj-d088f-default-rtdb.asia-southeast1.firebasedatabase.app/techniques/${currGenre}.json`,
      {
        method: "POST",
        body: JSON.stringify(technique),
      }
    );
  };

  useEffect(() => {
    if (
      technique.name !== "" &&
      technique.notes !== "" &&
      technique.link !== ""
    ) {
      setIsBtnDisabled(false);
    }
  }, [technique]);

  const onChangeNameHandler = (e) => {
    const newTechnique = {
      ...technique,
      name: e.target.value,
    };
    setTechnique(newTechnique);
  };
  const onChangeNotesHandler = (e) => {
    const newTechnique = {
      ...technique,
      notes: e.target.value,
    };
    setTechnique(newTechnique);
  };
  const onChangeTutorialHandler = (e) => {
    const newTechnique = {
      ...technique,
      link: e.target.value,
    };
    setTechnique(newTechnique);
  };

  return (
    <Modal
      title="New Technique Learnt?"
      open={true}
      onOk={handleOk}
      okButtonProps={{ disabled: isBtnDisabled }}
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
          <Input onChange={onChangeNameHandler} />
        </Form.Item>
        <Form.Item label="Notes">
          <Input onChange={onChangeNotesHandler} />
        </Form.Item>

        <Form.Item label="Genre">
          <Input placeholder={genre} disabled></Input>
        </Form.Item>

        <Form.Item label="Tutorial">
          <Input
            placeholder="Maybe a youtube link?"
            onChange={onChangeTutorialHandler}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewTechniques;
