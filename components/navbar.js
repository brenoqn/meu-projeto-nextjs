import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a className={styles.logoText}>Meu Website</a>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <a className={styles.menuItem}>Início</a>
          </Link>
        </li>
        <li>
          <Link href="/contato">
            <a className={styles.menuItem}>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a className={styles.menuItem}>Sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
