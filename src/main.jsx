import { createRoot } from "react-dom/client"; // Eksik olan import
import "./index.css";
import App from "./components/app/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
