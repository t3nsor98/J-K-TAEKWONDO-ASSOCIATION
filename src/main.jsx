import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OutOfBandwidth from "./components/OutOfBandwidth.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <OutOfBandwidth />
    </StrictMode>
);
