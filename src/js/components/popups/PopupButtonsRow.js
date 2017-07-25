import React from 'react';
import PropTypes from 'prop-types';

import {CancelButton, ConfirmButton} from '../common/Buttons';

const PopupButtonsRow = ({cancelClick, confirmClick}) => {
  return (
    <div className="popup-button-row">
      <CancelButton onClick={cancelClick} />
      <ConfirmButton onClick={confirmClick} />
    </div>
  );
};

PopupButtonsRow.propTypes = {
  cancelClick: PropTypes.func.isRequired,
  confirmClick: PropTypes.func.isRequired
};

export default PopupButtonsRow;
