import styles from "./page.module.css";

const anoatual = new Date().getFullYear(); // Obtém o ano atual
export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <address className={styles.address}>
          <p>Endereço:</p>
          <p>PE-022, 344-Box-B, Nossa senhora da Conceição, Paulista-PE.</p>
          <p>Paulista, 53.421-420, BR.</p>
          <p>Contato: 81 98807-5408 - WhatsApp.</p>
          <p>E-Mail: betofoxnettelecom@gmail.com.</p>
        </address>
        <address className={styles.addressyear}>
          <p>&copy; 2015 - {anoatual} por BetoFoxNet_Info</p>
        </address>
      </footer>
    </div>
  );
};