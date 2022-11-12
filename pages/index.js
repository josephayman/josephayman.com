import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      title="Home – Joseph Ayman"
      description="Home page - Joseph Ayman - Software Developer"
    >
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              HI, I'M JOSEPH AYMAN, <br />
              A SOFTWARE DEVELOPER <br />
              BASED IN OSLO, NORWAY.
            </h1>
          </div>
        </section>
        <section className={styles.contentSection}>
          <div className={styles.container}>
            <h2>Skills</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>Frontend</h3>
                <p>
                  HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
                  Bootstrap, Material UI, Styled Components, Framer Motion,
                  Locomotive Scroll
                </p>
              </div>
              <div className={styles.card}>
                <h3>Backend</h3>
                <p>
                  Node.js, Express, MongoDB, Mongoose, REST API, GraphQL, Apollo
                  Server, Apollo Client, JWT, Passport.js, Bcrypt, Mocha, Chai,
                  Supertest, Jest, Enzyme, Sinon, Nodemailer, Multer, Stripe,
                  Socket.io
                </p>
              </div>
              <div className={styles.card}>
                <h3>DevOps</h3>
                <p>
                  Git, GitHub, GitLab, Heroku, Netlify, Vercel, Docker, Nginx,
                  DigitalOcean, AWS, Cloudflare, Cloudinary, MongoDB Atlas,
                  Cloudinary, SendGrid, Twilio
                </p>
              </div>
              <div className={styles.card}>
                <h3>Other</h3>
                <p>
                  Agile, Scrum, Kanban, TDD, BDD, CI/CD, OOP, MVC, RESTful API,
                  JSON, XML, AJAX, Webpack, Babel, NPM, Yarn, WebSockets,
                  WebRTC, Webhooks, OAuth, Web Performance, Web Accessibility,
                  SEO,
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
      </footer>
    </div>
    </Container>
  );
}
