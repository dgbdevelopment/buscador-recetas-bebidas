import React, { useState } from "react";

const useSelect = (initialSatate, name, label, options) => {
  const [selected, setSelected] = useState(initialSatate);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const Select = () => (
    <select
      name={name}
      id={name}
      value={selected}
      onChange={handleChange}
      className="form-control"
    >
      <option value="">--- Seleccione {label} ---</option>
      {options.map((option) => (
        <option
          key={option[Object.keys(option)[0]]}
          value={option[Object.keys(option)[0]]}
        >
          {option[Object.keys(option)[0]]}
        </option>
      ))}
    </select>
  );

  return [selected, Select, setSelected];
};

export default useSelect;
