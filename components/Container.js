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
      <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={style.darkModeButton}
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
      <main className={styles.main}>{children}</main>
    </div>
  );
}