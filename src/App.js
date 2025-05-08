import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Home } from "./pages/Home";
import { RouteApp } from "./route";

function App() {
  return (
    <>
     <ToastContainer />
     <RouteApp/>
    </>
  );
}

export default App;
