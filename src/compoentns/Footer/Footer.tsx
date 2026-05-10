import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        Louisiana, Baton Rouge, 3041 Washburn Street
      </div>
      <div className={styles.row}>
        +1 919-555-8247
      </div>
      <div className={styles.row}>
        TheBestCompany@gmail.com
      </div>
      <div className={styles.row}>
        <b>2004-{(new Date()).getFullYear()} TheBestCompany</b>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;