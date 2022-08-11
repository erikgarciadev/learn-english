import { NextPage } from "next";
import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/erik-garcia-tacas/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by{" "}
        <span className={styles.name}>
          Erik Garcia
        </span>
      </a>
    </footer>
  );
};

export default Footer;
