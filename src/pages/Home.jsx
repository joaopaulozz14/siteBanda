import "./styles.css";
import NewsComponent from "../components/newsComponent/NewsComponent";
import Header from "../components/header/Header";
const Home = () => {
  return (
    <body>
      <div>
        <Header />

        <section class="news_section">
          <h2 class="h1_news">NEWS</h2>
          <NewsComponent />
        </section>

        <section class="watch_section">
          <h2 class="h1_news">WATCH</h2>
          <div class="watch_container">
            <div class="watch_container_iframe">
              <iframe
                src="https://www.youtube.com/embed/Xg_gOqZudKI?si=gBl1hYTvW-Y6IXso"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="video_container"
              ></iframe>
            </div>
          </div>
          <div class="watch_container_second">
            <div class="watch_container_iframe_second">
              <iframe
                src="https://www.youtube.com/embed/nkmuqq4TBQ8?si=t9AVIsfL6vZeNDeZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="video_container_second"
              ></iframe>
              <div class="watch_container_description">
                <h3 class="powerup">#POWER UP</h3>
                <h3>
                  IFMS - <br />
                  NEW SONG RELEASED - CARRY ON (OFFICIAL VIDEO)
                </h3>
              </div>
            </div>
            <div class="watch_container_iframe_second">
              <iframe
                src="https://www.youtube.com/embed/nkmuqq4TBQ8?si=t9AVIsfL6vZeNDeZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="video_container_second"
              ></iframe>
              <div class="watch_container_description">
                <h3 class="powerup">#POWER UP</h3>
                <h3>
                  IFMS - <br />
                  NEW SONG RELEASED - CARRY ON (OFFICIAL VIDEO)
                </h3>
              </div>
            </div>
            <div class="watch_container_iframe_second">
              <iframe
                src="https://www.youtube.com/embed/nkmuqq4TBQ8?si=t9AVIsfL6vZeNDeZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                class="video_container_second"
              ></iframe>
              <div class="watch_container_description">
                <h3 class="powerup">#POWER UP</h3>
                <h3>
                  IFMS - <br />
                  NEW SONG RELEASED - CARRY ON (OFFICIAL VIDEO)
                </h3>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <a href="https://www.youtube.com/watch?v=eyzJOMx0NAg" target="_blank">
            <button>FOLLOW ON YOUTUBE</button>
          </a>
          <a href="">
            <button>ALL VIDEOS</button>
          </a>
        </footer>
      </div>
    </body>
  );
};

export default Home;
