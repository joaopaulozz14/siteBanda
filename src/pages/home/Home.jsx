import "./styles.css";
import NewsComponent from "../../components/newsComponent/NewsComponent";
import VideosComponent from "../../components/videosComponent/VideosComponent";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <section className="news_section">
          <NewsComponent />
        </section>

        <section className="watch_section">
          <VideosComponent />
        </section>
      </div>
    </>
  );
};

export default Home;
