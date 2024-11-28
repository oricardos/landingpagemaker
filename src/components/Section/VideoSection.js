import React, { memo, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { scrollToSection } from "../../utils/scrollToSection";

export const VideoSection = memo(function VideoSection({ data, onUpdate }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    scrollToSection(data.show, sectionRef);
  }, [data.show]);

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

// export const VideoSection = React.memo(({ data, onUpdate }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     scrollToSection(data.show, sectionRef);
//     console.log("data", data);
//   }, [data]);

//   return (
//     <>
//       {data.show && (
//         <section
//           ref={sectionRef}
//           id="video"
//           className={`py-8 flex justify-center`}
//           style={{
//             backgroundColor: data.sectionBackgroundColor,
//             backgroundImage: data.backgroundImgSrc
//               ? `url(${data.backgroundImgSrc})`
//               : undefined,
//             backgroundSize: "cover",
//           }}
//         >
//           <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
//             <ReactPlayer
//               url={data.videoUrl}
//               // url={""}
//               width="100%"
//               height="100%"
//               className="aspect-video"
//               controls
//             />
//           </div>
//         </section>
//       )}
//     </>
//   );
// });
