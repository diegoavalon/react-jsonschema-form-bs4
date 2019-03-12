import React from "react";
import PropTypes from "prop-types";

function RadioWidget(props) {
  const {
    options,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
  } = props;
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled, inline, selectable } = options;
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  return (
    <div className="eh-radio-group">
      {enumOptions.map((option, i) => {
        const checked = option.value === value;
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) != -1;
        const disabledCls =
          disabled || itemDisabled || readonly ? "disabled" : "";
        const radio = (
          <input
            id={i}
            className="eh-radio__input"
            type="radio"
            checked={checked}
            name={name}
            required={required}
            value={option.value}
            disabled={disabled || itemDisabled || readonly}
            autoFocus={autofocus && i === 0}
            onChange={_ => onChange(option.value)}
          />
        );

        const selectableCard = (
          <div key={i} className="selectable-card">
            {radio}
            <label className="eh-radio__label bodyLarge" htmlFor={i}>
              {option.label}
            </label>
          </div>
        );

        if (selectable) return selectableCard

        return inline ? (
          <div key={i} className={`eh-radio__wrapper--inline ${disabledCls}`}>
            {radio}
            <label className="eh-radio__label bodyLarge" htmlFor={i}>
              {option.label}
            </label>
          </div>
        ) : (
          <div key={i} className={`eh-radio__wrapper ${disabledCls}`}>
            {radio}
            <label className="eh-radio__label bodyLarge" htmlFor={i}>
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}

RadioWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  RadioWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
  };
}
export default RadioWidget;
