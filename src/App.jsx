import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 md:px-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
