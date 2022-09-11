import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import RoomContainer from "../Components/RoomsContainer/RoomsContainer";
import { Link } from "react-router-dom";
import React from "react";

function Login() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
  
        <RoomContainer />
      </>
    );
  }
  
  export default Login;
  