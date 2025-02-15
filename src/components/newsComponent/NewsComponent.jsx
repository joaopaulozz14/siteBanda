import "./styles.css";

const NewsComponent = () => {
  return (
    <div className="news_section">
      <h2 className="h2_news">NEWS</h2>
      <div className="news_container">
        <div className="news_container_block">
          <div className="news_container_fit_img">
            <img
              src="/images/pexels-spadezaesthetics-14436042.jpg"
              alt=""
              className="news_container_img"
            />
          </div>
          <p>05.30.2024</p>
          <h2>BAND IN WASHINGTON</h2>
        </div>
        <div className="news_container_block">
          <div className="news_container_fit_img">
            <img
              src="/images/pexels-hannahmgibbs-949274.jpg"
              alt=""
              className="news_container_img"
            />
          </div>
          <p>05.30.2024</p>
          <h2>BAND IN WASHINGTON</h2>
        </div>
        <div className="news_container_block">
          <div className="news_container_fit_img">
            <img
              src="/images/pexels-mantas-hesthaven-46458-354304.jpg"
              alt=""
              className="news_container_img"
            />
          </div>
          <p>05.30.2024</p>
          <h2>ONE MONTH UNTIL IFMS IN CORUMBÁ</h2>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
