import "./App.css";

import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";

function App() {
  return (
    <>
      <ToastContainer />
      <RouteApp />
    </>
  );
}

export default App;
