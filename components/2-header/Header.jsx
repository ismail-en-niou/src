import React ,{useEffect}from 'react';
import ModalComponent from './subComponentes/ModalComponent';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Header({setShowTaskFilter}) {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    
}, []);

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
      "Waiting",
      "Time Expired",
    ],
  }

  return (
    <div className="header">
      <div className="modal-container"data-aos="zoom-in" >
        <ModalComponent name="Time" data={mockData.Time} setShowTaskFilter={setShowTaskFilter}/>
        <ModalComponent name="Team" data={mockData.Team} setShowTaskFilter={setShowTaskFilter}/>
        <ModalComponent name="Status" data={mockData.Status} setShowTaskFilter={setShowTaskFilter}/>
      </div>
    </div>
  );
}