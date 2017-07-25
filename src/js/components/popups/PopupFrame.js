import React from 'react';
import PropTypes from 'prop-types';

const PopupFrame = ({children, title, closePopup}) => {

  let _popup = null;

  const onClickClose = (e) => {
    if (e.target === _popup) {
      closePopup();
    }
  };

  return (
    <div className="popup-wrapper" onClick={onClickClose} ref={popup => { _popup = popup; }}>
      <div className="popup">
        <div className="popup-header">
          <h2>{title}</h2>
        </div>
        <div className="popup-content">
          {children}
        </div>
      </div>
    </div>
  );
};

PopupFrame.propTypes = {
  title: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default PopupFrame;
