import { BrowserRouter } from "react-router-dom";
import BJJRouter from "./router/BJJRouter";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <BJJRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
