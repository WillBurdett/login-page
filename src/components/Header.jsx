import logo from "../assets/logo.png";
// 'classes' could be called anything
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
