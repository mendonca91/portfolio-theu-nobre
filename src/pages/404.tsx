import { useRouter } from "next/router";
import Page from "../components/Page";
import styles from "../styles/404.module.scss";

export default function Custom404() {
  const router = useRouter();

  function handleHome() {
    router.push("/");
  }

  return (
    <Page
      title="CrediHome | Página não encontrada"
      description="Nosso propósito é levar crédito imobiliário para que os brasileiros possam realizar sonhos."
      image=""
    >
      <div className={`${styles.notFound} container`}>
        <h1>404</h1>
        <p>Oh não! Parece que você caiu em uma página desconhecida!</p>
        <button>Voltar</button>
      </div>
    </Page>
  );
}
