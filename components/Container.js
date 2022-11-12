import Head from "next/head";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import style from "./Container.module.css";

export default function Container(props) {

    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const {children, ...customMeta} = props;
    const router = useRouter();
    const meta = {
        title: "Joseph Ayman",
        description: "Hi, I'm Joseph Ayman, a software developer based in Oslo, Norway.",
        image: "https://josephayman.com/images/Joseph-Ayman-cover.png",
        type: "website",
        ...customMeta
    };
    

  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" /> {/*Makes sure the site gets indexed by webcrawlers */}
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://josephayman.com${router.asPath}`} />
        <link rel="canonical" href={`https://josephayman.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Joseph Ayman" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TrapJoHenny" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <title>{meta.title}</title>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}