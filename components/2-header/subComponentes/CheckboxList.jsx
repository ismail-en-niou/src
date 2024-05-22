import React, { useState, useEffect, useRef } from 'react';
import './CheckboxList.css';

export default function CheckboxList({
   name = "Team", data = [], setShowTaskFilter,
   handleCloseModal, checked, setChecked }) {
    const [isOutsideClick, setIsOutsideClick] = useState(false);
    const listContainerRef = useRef(null);
  
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (listContainerRef.current && !listContainerRef.current.contains(event.target)) {
          setIsOutsideClick(true);
        } else {
          setIsOutsideClick(false);
        }
      };
  
      const handleDocumentClick = (event) => {
        if (isOutsideClick) {
          handleCloseModal();
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('mouseup', handleDocumentClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('mouseup', handleDocumentClick);
      };
    }, [isOutsideClick, handleCloseModal]);
  
    const handleToggle = (value) => () => {
      if (checked === value) {
        setChecked(null);
        setShowTaskFilter((prevFilter) => ({
          ...prevFilter,
          [name]: null,
        }));
      } else {
        setChecked(value);
        setShowTaskFilter((prevFilter) => ({
          ...prevFilter,
          [name]: value,
        }));
      }
      // handleCloseModal();
    };
  
    return (
      <ul className="checkboxListContainer" ref={listContainerRef}>
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
                listStyle: 'none',
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
            <label htmlFor={labelId} style={{ marginLeft: '8px', cursor: 'pointer' }}>
              {`${value}`}
            </label>
          </li>
        );
      })}
    </ul>
  );
}
