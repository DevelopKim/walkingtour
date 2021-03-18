import YouTube from "react-youtube";
import { getYoutubeOptions } from "../lib/util";
import React, { useState, useEffect } from "react";

export default () => {
  const videoId = "gvcKh443vVk";
  const youtubeOption = getYoutubeOptions();

  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
  });

  function _onready(e) {}

  function _onstatechange(e) {}

  return (
    <div>
      <p>현재 값은 {value} 입니다. </p>
      <button onClick={() => setValue(value + 1)}> + 1 </button>
      <br />
      <button onClick={() => setValue(value - 1)}> - 1 </button>
      <div>
        <input value={name} onChange={onChangeName}></input>
        <input value={nickName} onChange={onChangeNickName}></input>

        <p> 이름 : {name}</p>
        <p> 닉테임 : {nickName}</p>
      </div>
    </div>

    // <div className="video-background">
    //   <div className="video-foreground">
    //     <YouTube
    //       videoId={videoId}
    //       opts={youtubeOption}
    //       onReady={(e) => _onready(e)}
    //       onStateChange={(e) => _onstatechange(e)}
    //     />
    //   </div>
    // </div>
  );
};
