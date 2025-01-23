import { RecoilRoot } from "recoil";
import { ReactFlowProvider } from "reactflow";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRouter from "./AppRouter";
import { useEffect, useState } from "react";
import DotCursor from "./pages/component/animatedCursor";

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

  const [loading, setLoading] = useState(true); // Bắt đầu ở trạng thái loading
  const [fadeOut, setFadeOut] = useState(false); // Kiểm soát mờ dần

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true); // Kích hoạt mờ dần
      setTimeout(() => setLoading(false), 500); // Ẩn hoàn toàn sau 0.5 giây (khớp với transition)
    }, 1000); // Thời gian hiển thị loader (1 giây)

    return () => clearTimeout(timeout);
  }, []);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading && (
        <div className={`loader-container ${fadeOut ? "hidden" : ""}`}>
          <div>
            <img
              src={"/logo/whitelonglogo.png"}
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
