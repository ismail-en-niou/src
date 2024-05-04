import React, { useState } from 'react';
import './CheckboxList.css';

export default function CheckboxList({ data = [] }) {
  const [checked, setChecked] = useState(1); // Initialize with the default selected value

  const handleToggle = (value) => () => {
    if (checked === value) {
      // If the clicked item is already selected, unselect it
      setChecked(null);
    } else {
      // Otherwise, select the clicked item
      setChecked(value);
    }
  };

  return (
    <ul className="checkboxListContainer">
      {data.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        const isSelected = checked === value;
        return (
          <li
            key={value}
            className={isSelected ? 'selected' : 'li'}
            onClick={handleToggle(value)}
          >
            <input
              type="checkbox"
              id={labelId}
              checked={isSelected}
              onChange={() => {}}
            />
            <label htmlFor={labelId}>{`${value}`}</label>
          </li>
        );
      })}
    </ul>
  );
}