import { useState } from "react";
import { Input, Button, Tooltip } from "antd";
import { AudioOutlined } from "@ant-design/icons";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import classes from "./index.module.css";
const { Search } = Input;

// const appId = "83919cef-3463-4bc8-9d06-9bd9ce0f7c2b";
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  // const startListening = () => {
  //   SpeechRecognition.startListening({ continuous: true });
  //   setSearchValue(searchValue);
  // };

  const onSearch = (value) => {
    console.log(value);
    setSearchValue(value);
    //resetTranscript();
  };
  //will search thru db to display corresponding data

  return (
    <Search
      placeholder="search for anything"
      onSearch={onSearch}
      allowClear
      style={{ width: "100%" }}
      suffix={
        <Button
          icon={
            <Tooltip title="hold and speak">
              <AudioOutlined
                style={{ color: "#6a3a45" }}
                // onMouseDown={startListening}
                // onMouseUp={SpeechRecognition.abortListening}
              />
            </Tooltip>
          }
        />
      }
    />
  );
};

export default SearchBar;
