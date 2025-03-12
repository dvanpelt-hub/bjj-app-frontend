import { BrowserRouter } from "react-router-dom";
import BJJRouter from "./router/BJJRouter";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <BJJRouter />
    </BrowserRouter>
  );
}

export default App;
