import { AppContext } from "@/context/ContextProvider";
import { useVideoModal } from "@/provider/VideoProvider";
import React, {useRef, useContext} from "react";

const VideoArea = () => {
  const {playVideo} = useVideoModal();
  const videoEl = useRef(null); 
  const {handleMouseEnter,handleMouseLeave} = useContext(AppContext); 
  
  return (
       <div className="tp-vedio-area p-relative pt-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-vedio-sction-box pb-70">
                <h4 className="tp-vedio-title">
                  The best customer relationship <br />
                  management platform for just <br />
                  about everything
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-vedio-wrap" >
                <a
                  className="popup-video tp-cursor-point-area" 
                  onClick={() => playVideo("w82a1FT5o88")}
                  onMouseEnter={() => handleMouseEnter(true)}
                  onMouseLeave={ () => handleMouseLeave(false)}
                >
                  <video                  
                  className="play-video" 
                  id="myVideo" 
                  autoPlay 
                  loop 
                  playsInline
                  muted
                  alt="All the devices"
                  src="https://html.hixstudio.net/videos/softec/softec-video.mp4"
                  ref={videoEl}> 
                  </video>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default VideoArea;
