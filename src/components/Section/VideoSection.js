import React, { memo } from "react";
import ReactPlayer from "react-player/youtube";
import { useScrollToSection } from "../../hooks/useScrollToSection";

export const VideoSection = memo(function VideoSection({ data, onUpdate }) {
  const sectionRef = useScrollToSection(data.show);

  return (
    <>
      {data.show && (
        <section
          ref={sectionRef}
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
});