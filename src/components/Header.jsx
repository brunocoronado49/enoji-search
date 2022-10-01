import ReactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="component-header">
      <img src={ReactLogo} alt="" width="32" height="32" />
      Emoji Search
      <img src={ReactLogo} alt="" width="32" height="32" />
    </header>
  );
};

export default Header;
