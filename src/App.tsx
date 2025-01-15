import { RecoilRoot } from "recoil";
import { ReactFlowProvider } from "reactflow";
import { QueryClient, QueryClientProvider } from "react-query";
//import { CookiesProvider } from "react-cookie";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRouter from "./AppRouter";


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
  return (
    <>
      <RecoilRoot>
        <ReactFlowProvider>
          <QueryClientProvider client={queryClient}>
          <AppRouter />
          </QueryClientProvider>
        </ReactFlowProvider>
      </RecoilRoot>
      
    </>
  );
}

export default App;
