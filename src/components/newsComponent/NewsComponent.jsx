import "./styles.css";

const NewsComponent = () => {
  return (
    <div class="news_container">
      <div class="news_container_block">
        <div class="news_container_fit_img">
          <img
            src="/images/pexels-spadezaesthetics-14436042.jpg"
            alt=""
            class="news_container_img"
          />
        </div>
        <p>05.30.2024</p>
        <h2>BAND IN WASHINGTON</h2>
      </div>
      <div class="news_container_block">
        <div class="news_container_fit_img">
          <img
            src="/images/pexels-hannahmgibbs-949274.jpg"
            alt=""
            class="news_container_img"
          />
        </div>
        <p>05.30.2024</p>
        <h2>BAND IN WASHINGTON</h2>
      </div>
      <div class="news_container_block">
        <div class="news_container_fit_img">
          <img
            src="/images/pexels-mantas-hesthaven-46458-354304.jpg"
            alt=""
            class="news_container_img"
          />
        </div>
        <p>05.30.2024</p>
        <h2>ONE MONTH UNTIL IFMS IN CORUMBÁ</h2>
      </div>
    </div>
  );
};

export default NewsComponent;
