import type { NextPage } from "next";
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
      <div className={`${styles.logo} container`}>
        <div>
          <img src="/assets/mn2.png" alt="Logo do site Matheus Nobre" />
          <ButtonAction onclick={handleClick} label="Quero fazer meu vídeo" />
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
