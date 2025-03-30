import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { ReactFlowProvider } from "reactflow";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRouter from "./AppRouter";
import DotCursor from "./pages/component/animatedCursor";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

function App() {
  AOS.init();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.pageYOffset > 50);
    });
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.out" });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy(); 
  }, []);

  return (
    <>
      {loading && (
        <div className={`loader-container ${fadeOut ? "hidden" : ""}`}>
          <div>
            <img
              src={"/logo/longlogo.png"}
              alt="Logo"
              className="block m-auto w-80"
            />
            <div className="spinner"></div>
          </div>
        </div>
      )}
      {!loading && (
        <>
          <RecoilRoot>
            <ReactFlowProvider>
              <QueryClientProvider client={queryClient}>
                <AppRouter />
              </QueryClientProvider>
            </ReactFlowProvider>
          </RecoilRoot>
        </>
      )}
      {showButton && (
        <svg
          className="back-to-top"
          onClick={scrollToTop}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      )}
      <DotCursor />
    </>
  );
}

export default App;
