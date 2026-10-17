import { Route, Routes } from "react-router-dom";
import { PageMeta } from "./components/PageMeta";
import ComponentGallery from "./dev/ComponentGallery";
import Layout from "./layout/Layout";
import { ROUTES } from "./routes";

export default function App() {
  return (
    <Routes>
      {ROUTES.map((meta) => (
        <Route
          key={meta.path}
          path={meta.path}
          element={
            <Layout>
              <PageMeta title={meta.title} description={meta.description} />
              {meta.element}
            </Layout>
          }
        />
      ))}
      {import.meta.env.DEV ? (
        <Route
          path="/gallery"
          element={
            <Layout>
              <ComponentGallery />
            </Layout>
          }
        />
      ) : null}
    </Routes>
  );
}
