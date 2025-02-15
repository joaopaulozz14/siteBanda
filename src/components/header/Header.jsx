import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <ul>
        <li onClick={() => navigate("/news")}>news</li>
        <li onClick={() => navigate("/form")}>form</li>
        <li className="band-logo" onClick={() => navigate("/")}>
          IF
          <span>
            <img
              src="/images/raio-de-trovao.png"
              alt=""
              className="header-lightning"
            />
          </span>
          MS
        </li>
        <li onClick={() => navigate("/watch")}>videos</li>

        <li onClick={() => navigate("/photos")}>fotos</li>
      </ul>
    </header>
  );
};

export default Header;
