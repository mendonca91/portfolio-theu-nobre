import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import styles from "./Footer.module.scss";

import logo from "../../../public/assets/mn2.png";
import ButtonAction from "../Button";

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
            <a
              className={styles.whats}
              href="https://api.whatsapp.com/send?phone=557999260877&text=Ol%C3%A1%2C%20quero%20ter%20minha%20hist%C3%B3ria%20contada%20em%20v%C3%ADdeo"
              target={"_blank"}
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              className={styles.insta}
              href="https://www.instagram.com/theeu/"
              target={"_blank"}
            >
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
        <ButtonAction
          url="https://forms.gle/BSyCu6nftk7CMcus6"
          label="Quero fazer meu vídeo"
        />
      </div>
    </footer>
    <div className={styles.reservedTxt}>
      <span>Todos os direitos reservados</span>
    </div>
  </>
);

export default Footer;
