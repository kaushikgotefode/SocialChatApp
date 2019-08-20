import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
const SelectListGroup = ({
  name,
  disabled,
  onChange,
  onFocus,
  info,
  error,
  label,
  value,
  options
}) => {
  const selectOptions = options.map(item => (
    <option key={item.label} value={item.value}>
      {item.label}
    </option>
  ));
  return (
    <div className="form-group">
      {label && <label className="control-label col-xs-4">{label}</label>}
      <div className="col-xs-8">
        <select
          className={classnames("form-control", {
            "is-invalid": error
          })}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onFocus={onFocus}
        >
          <option value="null">* Select Status</option>
          {selectOptions}
        </select>
        {info && <small className="form-text text-muted">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  options: PropTypes.array.isRequired
};

export default SelectListGroup;
