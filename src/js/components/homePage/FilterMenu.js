import React from 'react';
import PropTypes from 'prop-types';

import {questionsFilters} from '../../constants';


const FilterMenu = ({activeFilter, setFilter}) => {
  return (
    <div className="filter-menu">
      {
        Object.keys(questionsFilters).map((filter, i) => (
          <span
            key={i}
            className={`filter-menu-item ${activeFilter === filter ? 'filter-menu-item-active' : ''}`}
            onClick={ () => setFilter(filter) }
          >{filter.slice(filter.lastIndexOf('_') + 1).toLowerCase()}</span>
        ))
      }
    </div>
  );
};

FilterMenu.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default FilterMenu;
