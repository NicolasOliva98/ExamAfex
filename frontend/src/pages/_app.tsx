import "../styles/index.css";
import { Provider } from "react-redux";
import Store from "../store";
import Home from "./home";

const IndexPage = () => {
  return (
    <Provider store={Store}>
      <div className="bg-gray-200">
        <Home />
      </div>
    </Provider>
  );
};

export default IndexPage;
