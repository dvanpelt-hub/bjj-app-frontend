import { BrowserRouter } from "react-router-dom";
import BJJRouter from "./router/BJJRouter";
import Header from "./components/Header"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <BJJRouter />
    </BrowserRouter>
  );
}

export default App;
