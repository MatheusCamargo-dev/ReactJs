import {FaPlay, FaStop} from 'react-icons/fa';
import { RiRestartLine } from 'react-icons/ri';

import { useState, useRef } from 'react';

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayAndStop = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const clearPlayer = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center mt-5">
      <div className="embed-responsive embed-responsive-16by9">
        <video
          className='embed-responsive-item w-100 h-auto'
          controls
          ref={videoRef}
          src="/src/assets/videos/laugh_tale.mp4"
        />

      </div>
      <div className="controller-video mt-2 align-self-start">
        <button className="btn btn-primary" id="btn-player" onClick={togglePlayAndStop}>
          {isPlaying ? <FaStop className='mb-1'/> : <FaPlay className='mb-1'/>}
        </button>
        <button className="btn btn-primary ms-2" id="btn-stop" onClick={clearPlayer}>
          <RiRestartLine size={20} />
        </button>
      </div>
    </div>
  );
};
