import { BrowserRouter } from "react-router-dom";
import BJJRouter from "./router/BJJRouter";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <BJJRouter />
    </BrowserRouter>
  );
}

export default App;
