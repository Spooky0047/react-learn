import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Sample from "./sample";
import "./index.css";
import Dummy from "./dummy.jsx";
import "flowbite";
import Index from "./index.jsx";
import Footerr from "./Footer.jsx";
import Navbarr from "./navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="sticky">
    <Navbarr />
    <Footerr />
    <Index />
    <Sample />
    <App />
    <Dummy />
  </div>
);
