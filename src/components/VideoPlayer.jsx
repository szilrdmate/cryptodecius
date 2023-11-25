// VideoPlayer.js
import React from "react";

const VideoPlayer = () => {
  return (
    <div className="relative max-w-5xl mb-16" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/uZAjwrZJNG4?si=TTReYnRY0CDpOUyK"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
