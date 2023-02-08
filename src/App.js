import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

//Components
import Main from "./components/Main";

import WorkPage from "./components/WorkPage";

import SoundBar from "./subComponents/SoundBar";
import About from "./components/About";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Hire a Techie Red Raider | Kiriti Aryal - CS Major</title>
          <meta
            name="description"
            content="Looking for a full-stack developer. Hire from a trusted University like Texas Tech and hire to diversify your workforce. We all like rainbows because they have more colors."
          />
        </Helmet>
      </HelmetProvider>

      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}
              <Main key="main" />
              <About key="about" />
              <WorkPage key="work" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
