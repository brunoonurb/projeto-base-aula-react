import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";

import { RouteApp } from "./route";
import { ToastContainer } from "react-toastify";

function App() {
  return (

    <>
    <ToastContainer />
      <RouteApp />
    </>
  );
}

export default App;
