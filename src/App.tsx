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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.out" });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Tốc độ cuộn
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Hiệu ứng easing
      gestureOrientation: "vertical", // Cuộn theo chiều dọc
      wheelMultiplier: 1, // Điều chỉnh tốc độ cuộn chuột
      touchMultiplier: 2, // Điều chỉnh tốc độ khi cuộn trên mobile
      infinite: false, // Không cuộn vô tận
    });

    // Animation frame để cập nhật Lenis
    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Lắng nghe sự kiện scroll
    const onScroll = () => lenis.raf(performance.now());
    window.addEventListener("scroll", onScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual"; // Ngăn trình duyệt tự động cuộn lại
  }, []);

  return (
    <>
      {loading && (
        <div className={`loader-container ${fadeOut ? "hidden" : ""}`}>
          <div>
            <img src={"/logo/longlogo.png"} alt="Logo" className="block m-auto w-80" />
            <div className="spinner"></div>
          </div>
        </div>
      )}
      {!loading && (
        <RecoilRoot>
          <ReactFlowProvider>
            <QueryClientProvider client={queryClient}>
              <AppRouter />
            </QueryClientProvider>
          </ReactFlowProvider>
        </RecoilRoot>
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      )}
      <DotCursor />
    </>
  );
}

export default App;
