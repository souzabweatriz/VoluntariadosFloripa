import styles from "./doar.module.css";
import Header from "../../components/Header/Header";

export default function DoacaoPage() {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.title}>Pagina de Doacao</h1>
      <p>
        Obrigado por apoiar nosso projeto. Em breve, voce encontrara aqui os meios de
        contribuicao para fortalecer nossas acoes sociais.
      </p>
    </main>
  );
}
