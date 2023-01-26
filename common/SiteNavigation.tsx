import Link from "next/link";
import styles from '../styles/Home.module.css'

export const SiteNavigation = () => {
  return (
    <div className={styles.siteNavigation}>
      <Link href="/sites/grammar">Grammar</Link>
    </div>
  );
};
