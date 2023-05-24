import React, { Component } from "react";

// imports react-icons
import { FaHiking, FaShuttleVan, FaBeer, FaShoppingBag, FaWineBottle, FaBook, FaBookOpen, FaTrophy, FaRecycle, FaPeopleCarry, FaDonate } from "react-icons/fa";

// imports components
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaDonate />,
        title: "Login to Donate",
        info:
          "Let us know when you want your raddiwala to collect your books.",
      },
      {
        icon: <FaPeopleCarry />,
        title: "Raddiwala Notification & Collection",
        info:
          "We will notify the raddiwala near you and they will collect it at your desired time & location",
      },
      // {
      //   icon: <FaBookOpen />,
      //   title: "Book Collection",
      //   //info:
      //     // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
      // },
      {
        icon: <FaRecycle />,
        title: "Item recycling",
        info:
          "Your donateed electronic articles are sent to which will totally produce a transformed version of your books into useful products!",
      },
      {
        icon: <FaTrophy />,
        title: "Earn rewards",
        info:
          "Whats for you? The rewards that you earn can help you purchase these items at a good discounted rate",
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
