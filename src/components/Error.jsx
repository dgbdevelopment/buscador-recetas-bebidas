import React from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div className="row px-4 mt-4">
      <p className="col-12 alert alert-primary text-center">{message}</p>
    </div>
  );
};

Error.propTypes = { message: PropTypes.string.isRequired };

export default Error;
