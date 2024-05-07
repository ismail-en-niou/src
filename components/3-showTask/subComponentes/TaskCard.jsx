import React from 'react'
import './TaskCard.css';


export default function TaskCard({ Time,TimeValue, Team, Status, taskName, taskDescription }) {
  
  const statusColors = {
    "Waiting": "rgba(243, 178, 36, 1)",
    "Time Expired": "rgba(245, 38, 38, 1)",
    "Started": "rgba(19, 105, 233, 1)",
    "Not Started": "rgba(201, 181, 250, 1)"
  };

  const statusColorsGb = {
    "Waiting": "rgba(247, 225, 185, 1)",
    "Time Expired": "rgba(255, 154, 156, 1)",
    "Started": "rgba(144, 188, 239, 1)",
    "Not Started": "rgba(201, 181, 250, 1)"
  };

  const backgroundColorBg = statusColorsGb[Status] || "gold";

  const backgroundColor = statusColors[Status] || "gold";
  
  return ( 
    <div className="containerTaskCard">
  <div className="row">
    <div className="team">{Team}</div>
    <div className="status">{Status}</div>
    <div 
    className="time" 
    style={{
      backgroundColor: backgroundColorBg,
    }}
    >
      <div 
      style={{
        backgroundColor: backgroundColor ,
        width: Time + "%", 
        height:"100%",
        borderRadius:36, 
        display:"flex", 
        alignItems:"center", 
        justifyContent: Time < 50 ? "flex-end" : "center",
        paddingRight: ( Time> 20 && Time < 50 ) ? 6 : 0 ,
        borderWidth: 0.2,
        borderColor:  "rgba(247, 225, 185, 1)",
        fontSize: 11,
        fontWeight:"400"
        }}
        >
        {Time > 8 && TimeValue}
      </div>
    </div>
  </div>
  <div className="column">
    <div className="FirstText">
      Error: Photoshop Update Not Compatible with New OS
    </div>
    <div className="secondText">
      An issue arises with the latest Photoshop update, as it fails to align with the operating system's recent version, resulting in software malfunction or installation failure.
    </div>
  </div>
</div>
  )
}
