import React, { useEffect, useState } from "react";
import Aos from "aos";
import styles from "./Works.module.scss";
import Card from "../Card";
import { WorksCards } from "./Works";
import Modal from "../Modal";
import ButtonAction from "../Button";

const Works: React.FC = () => {
  const [types, setTypes] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFilterType = (type: string) => {
    setTypes(type);
  };

  const handleClick = () => {};
  return (
    <section id="portfolio" className={styles.workContainer}>
      <h2 data-aos="fade-right">Portfólio</h2>

      <nav>
        <ul>
          <li>
            <a onClick={() => handleFilterType("")}>Todos</a>
          </li>
          <li>
            <a onClick={() => handleFilterType("Esportes")}>Esportes</a>
          </li>
          <li>
            <a onClick={() => handleFilterType("Gastronomia")}>Gastronomia</a>
          </li>
          <li>
            <a onClick={() => handleFilterType("Beleza")}>Beleza</a>
          </li>
        </ul>
      </nav>
      <div data-aos="fade-up" className={styles.cardList}>
        {!types
          ? WorksCards.map((work) => (
              <Card
                key={work.id}
                openModal={() => handleOpenModal()}
                videoImage={work.src}
                videoDescription={work.alt}
              />
            ))
          : WorksCards.filter((work) => work.type === types).map(
              (filteredWork) => (
                <Card
                  key={filteredWork.id}
                  openModal={() => handleOpenModal()}
                  videoImage={filteredWork.src}
                  videoDescription={filteredWork.alt}
                />
              )
            )}
      </div>
      <ButtonAction
        url="https://forms.gle/BSyCu6nftk7CMcus6"
        label="Quero fazer meu vídeo"
      />
      {openModal && <Modal close={() => handleCloseModal()} videoSrc={""} />}
    </section>
  );
};

export default Works;
