import React from "react";

export interface SelectProps {
  label: string;
  id: string;
  options: {
    id: number;
    value: string;
  }[];
}

export const Select = ({
  label = "Choose a car",
  id = "cars",
  options = [{ id: 1, value: "value" }]
}): JSX.Element => {
  return (
    <>
      <label htmlFor={id}>{label}</label>

      <select name={id} id={id}>
        {options.map((option) => (
          <option key={option?.id} value={option?.value}>
            {option?.value}
          </option>
        ))}
      </select>
    </>
  );
};
