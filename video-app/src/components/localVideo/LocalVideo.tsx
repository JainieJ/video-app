import * as React from "react";
import s from "./LocalVideo.module.css";

const constraints = { video: true, audio: true };

const LocalVideo = () => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((e) => console.log(e));
  }, [videoRef]);

  return (
    <video ref={videoRef} autoPlay muted playsInline className={s.video} />
  );
};

export default LocalVideo;
