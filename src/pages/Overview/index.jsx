import ChoreoStats from "./widgets/ChoreoStats";
import Todo from "./widgets/Todo";

// const DUMMY_DATA = [{ name: "check this off" }, { name: "22" }];

const Overview = ({ data }) => {
  return <Todo data={data} />;
};

export default Overview;
