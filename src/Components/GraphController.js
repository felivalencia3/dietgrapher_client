import React from 'react';
import PropTypes from 'prop-types';

const GraphController = (props) => {
  const { auth } = props;
  let tokenCheck = '';
  if (auth) {
    tokenCheck = 'Authorized';
  } else {
    tokenCheck = 'Not Authorized';
  }
  return (<h1>{ tokenCheck }</h1>);
};
GraphController.propTypes = {
  auth: PropTypes.bool.isRequired
};
export default GraphController;
