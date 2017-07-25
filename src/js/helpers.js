import merge from "lodash/merge";

const assign = (...objects) => merge({}, ...objects);

const simpleValidation = state => {
  let result = [];

  Object.keys(state).forEach(field => {
    if (typeof state[field] === 'string') {
      state[field].length < 3
        ? result.push(field + ' should contains at least 3 characters')
        : null
    }
  });

  return result;
}

export { assign, simpleValidation };
