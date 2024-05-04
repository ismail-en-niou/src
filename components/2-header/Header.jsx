import React from 'react';
import ModalComponent from './subComponentes/ModalComponent';
import './Header.css';

export default function Header() {
  const mockData={
    "Time":[
      "Today",
      "This week",
      "This month",
      "This year",
    ],
    "Team":[
      "Back End",
      "Front End",
      "UI/UX",
    ],
    "Status":[
      "Started",
      "Not Started",
      "Wating",
      "Time Expired",
    ],
  }
  return (
    <div className="header">
      <div className="modal-container">
        <ModalComponent name="Time" data={mockData.Time}/>
        <ModalComponent name="Team" data={mockData.Team}/>
        <ModalComponent name="Status" data={mockData.Status}/>
      </div>
    </div>
  );
}