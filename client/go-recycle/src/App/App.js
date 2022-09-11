import "./App.css";

// import react-router-dom
import { Route, Routes } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} >
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
