import type { NextPage } from "next";
import { FaWhatsapp } from "react-icons/fa";
import AboutMe from "../components/AboutMe";
import ButtonAction from "../components/Button";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Page from "../components/Page";
import Skills from "../components/Skills";
import Works from "../components/Works";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const handleClick = () => {};
  return (
    <Page
      title="Matheus Nobre"
      description="Contando histórias através das fotos."
      image="/assets/camera.png"
    >
      <Header />
      <div id="header" className={`${styles.logo} container`}>
        <div>
          <img src="/assets/mn2.png" alt="Logo do site Matheus Nobre" />
          <ButtonAction
            url="https://forms.gle/BSyCu6nftk7CMcus6"
            label="Quero fazer meu vídeo"
          />
        </div>

        <video
          autoPlay={true}
          width="400px"
          height="500px"
          data-aos="fade-right"
          loop
        >
          <source src="./assets/demo.prproj.mp4" type="video/mp4" />
        </video>

        <div className={styles.linkWhats}>
          <a
            href="https://api.whatsapp.com/send?phone=557999260877&text=Ol%C3%A1%2C%20quero%20ter%20minha%20hist%C3%B3ria%20contada%20em%20v%C3%ADdeo"
            target={"_blank"}
          >
            <FaWhatsapp />
            <span>Fala comigo!</span>
          </a>
        </div>
      </div>

      <AboutMe />
      <Works />
      <Skills />
      <Clients />

      <Footer />
    </Page>
  );
};

export default Home;
