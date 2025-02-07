import Menu from "../components/layout/Menu/menu";
import Content from "../components/layout/Content/content";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  );
}
