import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

export default function books() {
  return (
    <>
        <Navbar />
    <div className={styles.container} >
        <h1>
            This a list of books that I've read and would recommend. And they have a little summary and my thoughts about them.
        </h1>

        <ul>
            <li>
                Made in America - Sam Walton
            </li>
            <li>
                On the Shortness of Life - Seneca
            </li>
            <li>
                Poor Charlie's Almanack - Charlie Munger
            </li>
            <li>
                The Art of War - Sun Tzu
            </li>
        </ul>
    </div>
    </>
  )
}
