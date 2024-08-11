import ReactDOM from "react-dom/client";
import "./index.css";
import RouteList from "./components/common/RouteList";
import "./components/common/language/i18n";
import { ThemeProvider } from "./components/common/theme/ThemeContext";
import Background from "./components/common/background/Background";
import LoginPage from "./components/login/Index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Background>
      <RouteList />
      {/* <LoginPage /> */}
    </Background>
  </ThemeProvider>
);
