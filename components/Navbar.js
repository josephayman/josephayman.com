import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navMenu}>
        <ul className={styles.navLinks}>
            <li><Link className={styles.navLink} href="/">Home</Link></li>
            <li ><Link className={styles.navLink} href="/blog">Blog</Link></li>
            <li ><Link className={styles.navLink} href="/books">Books</Link></li>
            <li ><Link className={styles.navLink} href="/about">About</Link></li>
            <li ><Link className={styles.navLink} href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}