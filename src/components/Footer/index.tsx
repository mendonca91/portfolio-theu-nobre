import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import styles from "./Footer.module.scss";

import logo from "../../../public/assets/mn2.png";

const Footer = () => (
  <>
    <footer className={styles.footerDiv}>
      <div className={styles.footerLogo}>
        <Image src={logo} />
      </div>
      <div className={styles.socialLinks}>
        <h2>Contato:</h2>
        <ul>
          <li>
            <a className={styles.whats} href="">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a className={styles.insta} href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a className={styles.mail} href="">
              <FaMailBulk />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerAction}>
        <h2>Quer fazer seu vídeo?</h2>
        <button>Clica aqui!</button>
      </div>
    </footer>
    <div className={styles.reservedTxt}>
      <span>Todos os direitos reservados</span>
    </div>
  </>
);

export default Footer;
