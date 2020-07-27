import React, { Component } from "react";
import cx from "classnames"

class NavLink extends Component {
  render() {

    const {btnArr} = this.props;
    const navButton = (active) => cx("btn", { active: active})

    return (
      <>
        {btnArr && btnArr.map(button => (
          <button
            key={button.id}
            type="button"
            title={button.url}
            onClick={()=> {}}
            className={navButton(button.isCurrentPage)}
          >
            {button.title}
          </button>
        ))}
      </>
    );
  }
}
export default NavLink;
