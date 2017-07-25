import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

import {MenuButton} from "./Buttons";

const Header = ({openAskQuestionPopup}) => {
  return (
    <div className="header">
      <div className="header-block">
        <div className="header-link-block">
          <NavLink to="/" exact>
            <h1 className="title-header">Ask Me</h1>
          </NavLink>
        </div>

        <div className="header-button-block">
          <MenuButton value="Ask Question" onClick={openAskQuestionPopup} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  openAskQuestionPopup: PropTypes.func.isRequired
}

export default Header;
