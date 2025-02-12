import "./styles.css";
const Header = () => {
  return (
    <header>
      <ul>
        <li>news</li>
        <li>tour</li>
        <li class="band-logo">
          IF
          <span>
            <img
              src="/images/raio-de-trovao.png"
              alt=""
              class="header-lightning"
            />
          </span>
          MS
        </li>
        <li>videos</li>

        <li>fotos</li>
      </ul>
    </header>
  );
};

export default Header;
