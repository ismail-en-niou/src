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
            className={isSelected ? 'selected' : ''}
            style={{
              display: 'flex',
              alignItems: 'center',
              height: 49,
              padding: '8px',
              listStyle: 'none'
            }}
            onClick={handleToggle(value)}
          >
            <input
              type="checkbox"
              id={labelId}
              checked={isSelected}
              onChange={() => {}}
              className="customCheckbox"
            />
            <h3
            onClick={handleToggle(value)} 
            htmlFor={labelId}
            >
              {`${value}`}
            </h3>
          </li>
        );
      })}
    </ul>
  );
}