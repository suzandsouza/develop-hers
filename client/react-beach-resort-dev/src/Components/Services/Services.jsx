import React, { Component } from "react";

// imports react-icons
import { FaHiking, FaShuttleVan, FaBeer, FaShoppingBag, FaWineBottle, FaBook, FaBookOpen } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaShoppingBag />,
        title: "Paper Hand bags",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
      {
        icon: <FaWineBottle />,
        title: "Water Bottles",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
      {
        icon: <FaBookOpen />,
        title: "Scrap Books",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
