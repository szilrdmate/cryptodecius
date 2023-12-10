// VideoPlayer.js
import React from "react";

const VideoPlayer = ({youtubeLink}) => {
  return (
    <div className="relative container mx-auto mb-16" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={youtubeLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;