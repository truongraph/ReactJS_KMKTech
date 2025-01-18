import { RecoilRoot } from "recoil";
import { ReactFlowProvider } from "reactflow";
import { QueryClient, QueryClientProvider } from "react-query";
//import { CookiesProvider } from "react-cookie";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRouter from "./AppRouter";

// import { database } from "../firebase";
// import { child, get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import DotCursor from "./pages/component/animatedCursor";

function App() {
  AOS.init();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false
      }
    }
  });
  //const dbRef = ref(database);
  // get(child(dbRef, `users`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      behavior: "smooth"
    });
  };

  return (
    <>
      {loading ? (
        <div className="loader-container bg-white">
          <div>
            <img
              src={"/images/logo/kmk/long-logo.png"}
              alt="Logo"
              className="block m-auto w-100"
            />
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
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
