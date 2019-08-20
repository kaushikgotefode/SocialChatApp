import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  disabled,
  onChange,
  onFocus,
  info,
  error,
  label
}) => {
  return (
    <div className="form-group">
      {label && <label className="control-label col-xs-4">{label}</label>}
      <div className="col-xs-8">
        <textarea
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
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func
};
TextAreaFieldGroup.defaultProps = {};

export default TextAreaFieldGroup;
