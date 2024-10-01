import { Routes, Route } from "react-router-dom";
import ArticlesListView from "./pages/home/view/list/index";
import DefaultLayout from "./layout/dashboard/index";
import AboutView from "./pages/about/view/about/index";
import NotFoundPage from "./pages/404";
import { Suspense } from "react";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div>
                 Loadin...
                </div>
              }
            >
              <ArticlesListView />
            </Suspense>
          }
        />
        <Route path="about" element={<AboutView />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
