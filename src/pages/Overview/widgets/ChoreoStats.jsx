import { Card } from "antd";
import heelsIcon from "../../../assets";
import hiphopIcon from "../../../assets";
import openIcon from "../../../assets";
import poleIcon from "../../../assets";
import streetJazzIcon from "../../../assets";

const DUMMY_DATA = [
  {
    key: 1,
    title: "HIP HOP",
    icon: hiphopIcon,
    value: 0,
  },
  {
    key: 2,
    title: "HEELS",
    icon: heelsIcon,
    value: 0,
  },
  {
    key: 3,
    title: "POLE",
    icon: poleIcon,
    value: 0,
  },
  {
    key: 4,
    title: "STREETJAZZ",
    icon: streetJazzIcon,
    value: 0,
  },
  {
    key: 5,
    title: "OPEN",
    icon: openIcon,
    value: 0,
  },
];

const ChoreoStats = () => {
    return (
        <Card>
            {DUMMY_DATA.map((stats) => {
                
            })}
        </Card>
    )
};

export default ChoreoStats;
