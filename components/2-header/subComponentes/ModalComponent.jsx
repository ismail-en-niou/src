import React, { useState } from 'react';
import CheckboxList from './CheckboxList';
import './ModalComponent.css';

const ModalComponent = ({ name = "Time" ,data=[]}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h4 className="button" onClick={() => handleClick('Item 1')}>
        <span>.</span>
        {name}
        <span>.</span>
      </h4>
      {showModal && <CheckboxList data={data} />}
    </div>
  );
};

export default ModalComponent;