import Footer from "../Footer";
import Header from "../Header";
import ScrollProgress from "../ScrollProgress";
import { Outlet } from "react-router-dom";

export default function Layout({ themeName, toggleTheme }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollProgress />
      <Header themeName={themeName} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
