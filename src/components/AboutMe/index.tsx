import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.scss";

import theu from "../../../public/assets/Theu.png";
import ButtonAction from "../Button";

const AboutMe: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <section id="about-me" className={styles.aboutContainer}>
      <div className={styles.aboutBg}></div>
      <div className={styles.aboutImage}>
        <Image
          data-aos="fade-down"
          src={theu}
          alt="Foto de Matheus Nobre segurando a câmera fotográfica"
        />
      </div>
      <div data-aos="fade-up" className={styles.aboutTxt}>
        <h2>Sobre mim</h2>

        <p>Me chamo Matheus Nobre, mas todo mundo me conhece como Theu.</p>
        <p>
          Nascido e criado em Aracaju, sou fã de praia, futebol e não por
          coincidência, de tudo o que envolve vivências ao ar livre e de
          movimento. Tendo crescido uma criança hiperativa, sempre me percebi
          fisgado pelo que os meus olhos enxergavam e para onde me levavam;
          qualquer menor sinal de ação me atraía, despertava meu interesse e foi
          isso o que me inspirou a ter vontade de registrar minhas experiências,
          lugares por onde passei e momentos que vivi.
        </p>
        <p>
          Já passei pela Nutrição, pela Gastronomia, mas aos poucos fui
          entendendo que gostava mais da filmagem do que um simples hobby: eu
          podia fazer isso virar meu dia-a-dia. Colocar em prática a minha visão
          inquieta sobre o mundo, sobre as coisas e fazer a minha vida
          literalmente ser sobre aquilo. Aqui contei um pequeno trecho da minha
          história para te inspirar a me deixar contar um pouco da sua.
        </p>
        <ButtonAction
          url="https://api.whatsapp.com/send?phone=557999260877&text=Ol%C3%A1%2C%20quero%20ter%20minha%20hist%C3%B3ria%20contada%20em%20v%C3%ADdeo"
          label="Vamos trocar uma ideia!"
        />
      </div>
    </section>
  );
};

export default AboutMe;
