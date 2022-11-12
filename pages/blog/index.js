import Link from "next/link";
import Container from "../../components/Container";
import styles from "../../styles/Home.module.css";

export default function Blog() {
  return (
    <Container title="Blog – Joseph Ayman">
    <Navbar />
    <div className={styles.container}>    
      <h1>Welcome to my blog</h1>
      <p>
        This my personal blog where I write about whole different topics. This is kind of hitting two birds with one stone.
        I get to write about topics that I've read about and I get the oppurtunity to let other people challenge my thoughts.
        Kind of a constructive way to get feedback on my thoughts.
      </p>

      <div>
        <Link href="/blog/DoYouBelieveInGod">
          Do you believe in God?
        </Link>
      </div>
      </div>
    </Container>
  );
}
