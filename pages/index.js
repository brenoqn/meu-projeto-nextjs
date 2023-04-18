import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/Button.module.css";
// import messageStyles from "../styles/Message.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo ao Meu Blog !</h1>

        <h3 className={styles.description}>
          Jogue{" "}
          <Link href="/tictac" legacyBehavior>
            Tic Tac Toe
          </Link>
        </h3>

        {/* <div className={styles.button}>
          {" "}
          <div className={`${messageStyles.message} ${messageStyles.success}`}>
            Alguma coisa foi feita com sucesso.
          </div>
        </div>

        <div className={styles.button}>
          <div className={`${messageStyles.message} ${messageStyles.error}`}>
            Oops! Encontramos um problema.
          </div>
        </div> */}

        <div className={styles.button}>
          <Link href="/blog">
            <a className={buttonStyles.button}>
              Comece a navegar
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
