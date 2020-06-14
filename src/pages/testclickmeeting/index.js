import React from "react";
import YouTube from "react-youtube";

export default function TestPage(props) {
  function _onReady(event) {
    event.target.pauseVideo();
  }
  return <YouTube videoId={"2PBjUL_q2So"} onReady={_onReady} />;
}
