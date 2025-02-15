import Footer from "../footer/Footer";
import "./styles.css";

const VideosComponent = () => {
  return (
    <>
      <h2 className="h2_news">WATCH</h2>
      <div className="watch_container">
        <div className="watch_container_iframe">
          <iframe
            src="https://www.youtube.com/embed/Xg_gOqZudKI?si=gBl1hYTvW-Y6IXso"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_container"
          ></iframe>
        </div>
      </div>
      <div className="watch_container_second">
        <div className="watch_container_iframe_second">
          <iframe
            src="https://www.youtube.com/embed/nkmuqq4TBQ8?si=t9AVIsfL6vZeNDeZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_container_second"
          ></iframe>
          <div className="watch_container_description">
            <h3 className="powerup">#POWER UP</h3>
            <h3>
              IFMS - <br />
              NEW SONG RELEASED - CARRY ON (OFFICIAL VIDEO)
            </h3>
          </div>
        </div>
        <div className="watch_container_iframe_second">
          <iframe
            src="https://www.youtube.com/embed/nkmuqq4TBQ8?si=t9AVIsfL6vZeNDeZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_container_second"
          ></iframe>
          <div className="watch_container_description">
            <h3 className="powerup">#POWER UP</h3>
            <h3>
              IFMS - <br />
              NEW SONG RELEASED - CARRY ON (OFFICIAL VIDEO)
            </h3>
          </div>
        </div>
        <div className="watch_container_iframe_second">
          <iframe
            src="https://www.youtube.com/embed/nkmuqq4TBQ8?si=t9AVIsfL6vZeNDeZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video_container_second"
          ></iframe>
          <div className="watch_container_description">
            <h3 className="powerup">#POWER UP</h3>
            <h3>
              IFMS - <br />
              NEW SONG RELEASED - CARRY ON (OFFICIAL VIDEO)
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosComponent;
