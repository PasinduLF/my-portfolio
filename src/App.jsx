import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { LoadingFallback } from "@/components/ui/loading-fallback";

// Lazy load route components for code splitting
const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const NotFound = lazy(() => import("./pages/NotFound").then((module) => ({ default: module.NotFound })));

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <GoogleAnalytics />
        <Suspense fallback={<LoadingFallback message="Loading portfolio..." />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
