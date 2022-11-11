import '../styles/globals.css'
import '../styles/locomotive-scroll.css'
import { useEffect } from 'react';
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function MyApp({ Component, pageProps }) {
  // useEffect(()=> window.dispatchEvent(new Event('resize')), [Component]);
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
        scroll = new locomotiveModule.default({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            smoothMobile: false,
            resetNativeScroll: true
        });
    });

    // `useEffect`'s cleanup phase
    return () => {
        if (scroll) scroll.destroy();
    }
});
  return (
  <main data-scroll-container>
    <Component {...pageProps} />
  </main>
  ) 
}

export default MyApp
