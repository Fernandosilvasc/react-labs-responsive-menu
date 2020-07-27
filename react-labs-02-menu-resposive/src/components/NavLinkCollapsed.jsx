import React, { Component } from "react";

class NavLinkCollapsed extends Component {
  state = {
    toggle: ""
  };

  navHandler = event => {
    event.preventDefault();
    this.setState({
      toggle: this.state.toggle === "open" ? "" : "open"
    });
  };

  render() {
    const { btnArr } = this.props;
    const { toggle } = this.state;

    return (
      <>
        <div id="nav-icon" onClick={this.navHandler} className={toggle}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="overlay" style={{display: toggle === "open" ? "block" : "none"}}>
          <div className="wrap">
            {/* Concept of .map() */}
            {/* btnArr = [button, button, button, button] */}
            {btnArr && btnArr.map(button => (
              <a 
                type="button"
                title={button.url}
                key={button.id}
                href={button.url}
                onClick={(e) => this.navHandler(e)}
              >
                {button.title}
              </a>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default NavLinkCollapsed;
