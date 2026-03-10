import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Personvern from "./components/pages/Personvern";
import Cookies from "./components/pages/Cookies";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="personvern" element={<Personvern />} />
        <Route path="cookies" element={<Cookies />} />
      </Route>
    </Routes>
  );
}
