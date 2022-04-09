/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import React, { useState } from "react";
import { FaBars, FaXbox } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

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
              <Link
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sobre mim
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfólio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Tipos de vídeo
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                activeClass="active"
                to="clients"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Clientes
              </Link>
            </li>
            <li className={styles.navItem}>
              <a href="https://forms.gle/BSyCu6nftk7CMcus6" target={"_blank"}>
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
                  <Link
                    activeClass="active"
                    to="about-me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Sobre mim
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Portfólio
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Tipos de vídeo
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link
                    activeClass="active"
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Clientes
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <a
                    href="https://forms.gle/BSyCu6nftk7CMcus6"
                    target={"_blank"}
                  >
                    <strong> Quero ter minha história contada em vídeo</strong>
                  </a>
                </li>
              </ul>
              <button type="button" onClick={() => setIsOpen(false)}>
                <span>X</span>
              </button>
            </nav>
          )}
        </div>
      )}
    </>
  );
};
export default Header;
