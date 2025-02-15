import "./styles.css";

const NewsComponent = () => {
  return (
    <div className="news_section">
      <h2 className="h2_news">NEWS</h2>
      <div className="news_container">
        <div className="news_container_block">
          <div className="news_container_fit_img">
            <img
              src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
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
              src="https://images.pexels.com/photos/2614942/pexels-photo-2614942.jpeg?auto=compress&cs=tinysrgb&w=400"
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
              src="https://images.pexels.com/photos/354304/pexels-photo-354304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
