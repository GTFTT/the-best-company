import styles from "./Header.module.css";
import header1 from "./../../assets/header1.svg"
import logo from "./../../assets/logo.svg"

function Header() {
  return (
    <header className={styles.container}>
      <img src={header1} alt="header" className={styles.headerBackgroundImage} />
      <div className={styles.textContainer}>
        <span><img src={logo} alt={"logo"} className={styles.logo}/></span>
        <span className={styles.companyName}>TheBestCompany</span>
      </div>
    </header>
  );
}

export default Header;