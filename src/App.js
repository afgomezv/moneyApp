import "./App.css";
import { ListMove } from "./components/ListMove";
import { Register } from "./components/Register";
import { TopNavbar } from "./components/TopNavbar";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <div className="d-flex">
        <Register />
        <ListMove />
      </div>
    </div>
  );
};

export { App };
