import React, { useState, useEffect } from 'react';
import CheckboxList from './CheckboxList';
import './ModalComponent.css';

const ModalComponent = ({ name = "Time", data = [], setShowTaskFilter }) => {
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(null);
  const iconLabels = {
    "Time": 'icon-clock',
    "Team": 'icon-groups',
    "Status": 'icon-circle-dashed1',
  };

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // useEffect(() => { 
  //   // Reset checked state when data changes
  //   setChecked([]);
  // }, [data]);

  return (
    <div className="container">
      <h4 className="button-list" onClick={handleClick}>
        <span className={iconLabels[name]} style={{fontSize:18,color:"#000"}}></span>
          {name}
      </h4>
      {showModal && <CheckboxList name={name} data={data} setShowTaskFilter={setShowTaskFilter} handleCloseModal={handleCloseModal} setChecked={setChecked} checked={checked} />}
    </div>
  );
};

export default ModalComponent;
