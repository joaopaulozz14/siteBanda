import { useNavigate } from "react-router-dom";
import "./styles.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <a href="https://www.youtube.com/watch?v=eyzJOMx0NAg" target="_blank">
          <button>FOLLOW ON YOUTUBE</button>
        </a>

        <button onClick={() => navigate("/watch")}>ALL VIDEOS</button>
      </footer>
    </>
  );
};

export default Footer;
