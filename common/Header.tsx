import styles from "../styles/Home.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>English</div>
      <nav className={styles.navigationSection}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <Link href="/sites">Sites</Link>
          </li>
          <li>
            <Link href="/youtube">Youtube</Link>
          </li>


        </ul>
      </nav>
    </div>
  );
};
