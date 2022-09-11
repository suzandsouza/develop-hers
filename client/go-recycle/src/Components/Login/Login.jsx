import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import defaultImg from "../../assets/img/jpeg/paper-recycling.jpeg";

// import prop-types
import PropTypes from "prop-types";

export default function Login({ login }) {
  const { email, password } = login;

  return (
    <article className="login">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />

        <div className="price-top">
          <h6>$ {price}</h6>
          
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          CHOOSE PRODUCT
        </Link>
      </div>
      <p className="room-info">{email}</p>
    </article>
  );
}

Room.prototype = {
  room: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    // images: PropTypes.arrayOf(PropTypes.string).isRequired,
    // price: PropTypes.number.isRequired,
  }),
};
