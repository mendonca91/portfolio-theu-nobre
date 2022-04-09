import React from "react";
import styles from "./Skills.module.scss";
import { SkillsItens } from "./Skills";
import ButtonAction from "../Button";
import { useRouter } from "next/router";

const Skills = () => {
  const router = useRouter();

  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2 data-aos="fade-right">Tipos de filmagens</h2>
      <div className={styles.skillsContent}>
        {SkillsItens.map((item) => (
          <div
            className={styles.skillsItem}
            key={item.id}
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ButtonAction
        url="https://forms.gle/BSyCu6nftk7CMcus6"
        label="Quero fazer meu vídeo"
      />
    </section>
  );
};

export default Skills;
