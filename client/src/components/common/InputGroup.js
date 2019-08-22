import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InputGroup = ({
  name,
  type,
  placeholder,
  value,
  disabled,
  onChange,
  onFocus,
  icon,
  error,
  label
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" style={{ width: "40px" }}>
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
      <input
        type={type}
        className={classnames("form-control", {
          "is-invalid": error
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.object,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
};
InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
