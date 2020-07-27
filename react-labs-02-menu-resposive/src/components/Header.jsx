import React, { Component } from "react";
import Media from "react-media";

//component
import NavLink from "./NavLink";
import NavLinkCollapsed from "./NavLinkCollapsed";

//import image
import logo from "../img/abstract-logo.png";

class Header extends Component {
  state = {
    btnObject: [
      {
        id: 1,
        title: "HOME",
        isCurrentPage: false,
        url: "#overview"
      },
      {
        id: 2,
        title: "INVENTORY",
        isCurrentPage: false,
        url: "#the-core"
      },
      {
        id: 3,
        title: "SERVICES",
        isCurrentPage: false,
        url: "#solutions"
      },
      {
        id: 4,
        title: "BLOG",
        isCurrentPage: false,
        url: "#about"
      },
      {
        id: 5,
        title: "SHOP",
        isCurrentPage: false,
        url: "#lets-start"
      }
    ]
  };
  render() {
    const { btnObject } = this.state;

    return (
      <>
        <header>
          <div className="navLeft">
            <img className="brand-logo" src={logo} alt="brand" />
            <h3>Automotive Shop</h3>
          </div>

          <div className="navRight">
            <Media
              queries={{
                small: "(max-width: 750px)",
                notSmall: "(min-width: 751px)"
              }}
            >
              {matches => (
                <>
                  {matches.small && <NavLinkCollapsed btnArr={btnObject} />}
                  {matches.notSmall && <NavLink btnArr={btnObject} />}
                </>
              )}
            </Media>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
