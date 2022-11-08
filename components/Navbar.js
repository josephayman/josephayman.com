import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div>
        <Link href="/"><Image src="/images/full-logo.png" width={81*2} height={39*2}></Image></Link>
        </div>
        <ul className={styles.navbarLinks}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className={styles.navbarIcons}>
            <a target="_blank" href="
            https://www.linkedin.com/in/joseph-ayman-ba5936199/"><Image src="/icons/linkedin.svg" width={30} height={30}></Image></a>
            <a target="_blank" href="
            https://github.com/yngthug"><Image src="/icons/github.svg" width={30} height={30}></Image></a>
        </div>
    </nav>
  )
}
