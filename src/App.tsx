import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<h1>Hello there</h1>} />
      </Routes>
    </Layout>
  );
};
