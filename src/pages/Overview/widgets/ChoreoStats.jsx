import { Card, Typography } from "antd";
//import heelsIcon from "../../../assets/heelsIcon.png";
// import hiphopIcon from "../../../assets/hiphopIcon.png";
// import openIcon from "../../../assets/openIcon.png";
// import poleIcon from "../../../assets/poleIcon.png";
// import streetJazzIcon from "../../../assets/streetJazzIcon.png";

const { Text } = Typography;

const DUMMY_DATA = [
  {
    key: 1,
    title: "HIP HOP",
    //icon: hiphopIcon,
    value: 0,
  },
  {
    key: 2,
    title: "HEELS",
    //icon: `url(${heelsIcon})`,
    value: 0,
  },
  {
    key: 3,
    title: "POLE",
    //icon: `url(${poleIcon})`,
    value: 0,
  },
  {
    key: 4,
    title: "STREETJAZZ",
    //icon: `url(${streetJazzIcon})`,
    value: 0,
  },
  {
    key: 5,
    title: "OPEN",
    //icon: `url(${openIcon})`,
    value: 0,
  },
];

const ChoreoStats = () => {
  return (
    <Card>
      <ul>
        {DUMMY_DATA.map((stats) => (
          <li>
            <div>
              <img src={stats.icon} alt="icon" />
            </div>
            <div>
              <Text>{stats.value}</Text>
            </div>
            <div>
              <Text>{stats.title}</Text>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ChoreoStats;
