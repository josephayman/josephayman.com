import Container from "../components/Container";
import Styles from "../styles/Home.module.css";
import Image from "next/image";

export default function BooksLayout({ children, book }) {
  return (
    <Container 
    title={`${book.title} – Joseph Ayman`}
    type="article"
    >
      <div className={Styles.container}>
        <article>
            <h1>{book.title}</h1>
            <Image src={book.cover} alt={book.title} width={200} height={300} />
        </article>
      </div>
    </Container>
  );
}
