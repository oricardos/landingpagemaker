import React from "react";
import ReactPlayer from "react-player/youtube";

export const VideoSection = ({ data, onUpdate }) => {
  return (
    <>
      {data.show && (
        <section
          id="video"
          className={`py-8 flex justify-center`}
          style={{
            backgroundColor: data.sectionBackgroundColor,
            backgroundImage: data.backgroundImgSrc
              ? `url(${data.backgroundImgSrc})`
              : undefined,
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
            <ReactPlayer
              url={data.videoUrl}
              // url={""}
              width="100%"
              height="100%"
              className="aspect-video"
              controls
            />
          </div>
        </section>
      )}
    </>
  );
};
