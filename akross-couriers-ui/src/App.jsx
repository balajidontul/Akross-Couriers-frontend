import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";

// Lazy load components
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ComingSoon />
              </Suspense>
            }
          />

          <Route path="/" element={<AppLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
