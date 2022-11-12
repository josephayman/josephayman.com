import Container from "../components/Container";
import Styles from "../styles/Home.module.css";

export default function BlogLayout({ children, post }) {
  return (
    <Container 
    title={`${post.title} – Joseph Ayman`}
    type="article"
    >
      <div className={Styles.container}>
        <article>
            <h1>{post.title}</h1>
        </article>
      </div>
    </Container>
  );
}
