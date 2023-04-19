import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Control(props) {
  return (
    <div className="control">
      <button className="contol_SkipBtn" onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="contol_PlayButton"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="contol_SkipBtn" onClick={() => props.skipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Control;
