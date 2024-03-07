import { useLocation, useRoutes } from "react-router-dom";
import router from "./router";
import Header from "./../src/components/header/Header";
import NewLatter from "./components/newLatter/NewLatter";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  let routes = useRoutes(router);
  return (
    <>
      <Header />
      <div>{routes}</div>

      <NewLatter />
      <Footer />
    </>
  );
}

export default App;
