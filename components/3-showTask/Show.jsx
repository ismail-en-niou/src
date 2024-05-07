import React from 'react'
import './Show.css'
import TaskCard from './subComponentes/TaskCard'


export default function Show() {
  const mockData = [
    {
      "Team": "Front End",
      "Status": "Waiting",
      "Time": 65,
      "TimeValue": "18h",
      "taskName": "Error: Photoshop Update Not Compatible with New OS",
      "taskDescription": "An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure."
    },
    {
      "Team": "Back End",
      "Status": "Time Expired",
      "Time": 40,
      "TimeValue": "8h",
      "taskName": "Error: Photoshop Update Not Compatible with New OS",
      "taskDescription": "An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure."
    },
    {
      "Team": "UX/UI",
      "Status": "Started",
      "Time": 35,
      "TimeValue": "48h",
      "taskName": "Error: Photoshop Update Not Compatible with New OS",
      "taskDescription": "An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure."
    },
    {
      "Team": "Front End",
      "Status": "Not Started",
      "Time": 100,
      "TimeValue": "68h",
      "taskName": "Error: Photoshop Update Not Compatible with New OS",
      "taskDescription": "An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure."
    },
    {
      "Team": "Back End",
      "Status": "Started",
      "Time": 45,
      "TimeValue": "28h",
      "taskName": "Error: Photoshop Update Not Compatible with New OS",
      "taskDescription": "An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure."
    },
    {
      "Team": "UX/UI",
      "Status": "Waiting",
      "Time": 85,
      "TimeValue": "13h",
      "taskName": "Error: Photoshop Update Not Compatible with New OS",
      "taskDescription": "An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure."
    }
  ];
  return ( 
    <div className="containerShow" style={{ overflow: 'auto' }}>
        {mockData.map((data, index) => (
      <TaskCard key={index} {...data} />
    ))}
    </div>
  )
}
