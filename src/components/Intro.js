import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import { hiphopIntro } from "../assets/Intros";

const Intro = ({ genre }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title={`What exactly is ${genre}?`}
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
      >
        <hiphopIntro />
      </Drawer>
    </>
  );
};
export default Intro;
