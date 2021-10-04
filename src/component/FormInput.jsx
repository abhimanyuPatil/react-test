import React from "react";

export const FormInput = (props) => {
  const { placeholder, fieldName, label, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={fieldName}>{label}</label>
      <input className="form-control" placeholder={placeholder} {...rest} />
    </div>
  );
};
