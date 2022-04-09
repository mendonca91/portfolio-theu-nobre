/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import React, { useState } from "react";
import { FaBars, FaXbox } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./Header.module.scss";

const Header = () => {
  const window = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {window.width && window.width > 1250 ? (
        <nav className={styles.navHeader}>
          <img src="./assets/MN-branco.png" alt="" />
          <ul className={styles.navItens}>
            <li className={styles.navItem}>
              <a href="#about-me">Sobre mim</a>
            </li>
            <li className={styles.navItem}>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li className={styles.navItem}>
              <a href="#skills">Tipos de vídeo</a>
            </li>
            <li className={styles.navItem}>
              <a href="#clients">Clientes</a>
            </li>
            <li className={styles.navItem}>
              <a href="#">
                <span> Quero ter minha história contada em vídeo</span>
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <div className={styles.navMobile}>
          <button type="button" onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>
          <img src="./assets/MN-branco.png" alt="" />
          {isOpen && (
            <nav className={styles.navHeader}>
              <ul className={styles.navItens}>
                <li className={styles.navItem}>
                  <a href="about-me">Sobre mim</a>
                </li>
                <li className={styles.navItem}>
                  <a href="portfolio">Portfólio</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#">Clientes</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#">
                    <span> Quero ter minha história contada em vídeo</span>
                  </a>
                </li>
              </ul>
              <button type="button" onClick={() => setIsOpen(false)}>
                <FaXbox />
              </button>
            </nav>
          )}
        </div>
      )}
    </>
  );
};
export default Header;
