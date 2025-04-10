import { HashRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { RecoilEnv, RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import Error500Page from "./pages/error/Error500Page";
// Duplicate atom key 체크 false
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const queryClient = new QueryClient();
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error500Page}>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className="flex flex-col h-full">
            <div className="flex flex-col flex-grow overflow-hidden">
              <HashRouter>
                <AppRouter />
              </HashRouter>
            </div>
          </div>
        </RecoilRoot>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
