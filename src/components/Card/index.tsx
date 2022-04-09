import React from "react";
import styles from "./Card.module.scss";

interface ICard {
  openModal: () => void;
  videoImage: string;
  videoDescription: string;
}

const Card = ({ openModal, videoImage, videoDescription }: ICard) => (
  <div className={styles.cardContainer}>
    <button onClick={openModal}>
      <img src={videoImage} alt={videoDescription} />
    </button>
  </div>
);

export default Card;
