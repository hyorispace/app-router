import Link from "next/link";
import * as styles from "./layout.css";

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <li className={styles.list}>
            <Link href={"/1"}>1</Link>
          </li>
          <li className={styles.list}>
            <Link href={"/2"}>2</Link>
          </li>
          <li className={styles.list}>
            <Link href={"/3"}>3</Link>
          </li>
          <li className={styles.list}>
            <Link href={"/4"}>4</Link>
          </li>
        </nav>
      </header>

      <div className={styles.inner}>{children}</div>
    </main>
  );
}
