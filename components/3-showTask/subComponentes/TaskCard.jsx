import React from 'react';
import { useMediaQuery } from '@mui/material';
import './TaskCard.css';
export default function TaskCard({ Time, TimeEnd, TimeStart, index, team, Status, taskName, taskDescription }) {
  const isSmallScreen = useMediaQuery('(max-width:860px)');
  const statusColors = {
    "Waiting": "rgba(243, 178, 36, 1)",
    "Time Expired": "rgba(245, 38, 38, 1)",
    "Started": "rgba(19, 105, 233, 1)",
    "Not Started": "rgba(143, 98, 255, 1)"
  };
  const statusColorsGb = {
    "Waiting": "rgba(247, 225, 185, 1)",
    "Time Expired": "rgba(255, 154, 156, 1)",
    "Started": "rgba(144, 188, 239, 1)",
    "Not Started": "rgba(143, 98, 255, 1)"
  };
  const statusIcon = {
    "Waiting": "icon-circle-dashed1",
    "Time Expired": "icon-time-delete2-1",
    "Started": "icon-play-circle-1",
    "Not Started": "icon-pending1"
  };
  const backgroundColorBg = statusColorsGb[Status];
  const backgroundColor = statusColors[Status];
  let progressWidth;
  if (!Time) {
    progressWidth = "100%";
  } else {
    progressWidth = `${Time}%`;
  }
  const numericProgressWidth = parseFloat(progressWidth);
  return (
    <div className="containerTaskCard" style={{ paddingLeft: isSmallScreen ? 0 : 8 }}>
      <div className="row">
        <div className="team" style={{ textTransform: "capitalize" }}>
          <span className='icon-groups' style={{ marginRight: 8, marginTop: 2, fontSize: 16 }}></span>
          {team}
        </div>

        <div className="status" style={{ textTransform: "capitalize" }}>
          <span className={statusIcon[Status]} style={{ marginRight: 8, marginTop: 2, fontSize: 16 }}></span>
          {Status}
        </div>
        <div className="index" style={{ textTransform: "capitalize" }}>
          {index}
        </div>
        <div className="time" style={{ backgroundColor: backgroundColorBg }}>
          <div
            className="progress-bar"
            style={{
              width: (numericProgressWidth > 0 && numericProgressWidth < 6) ? "0%" : (isNaN(numericProgressWidth) ? "100%" : progressWidth),
              backgroundColor: backgroundColor,
            }}
          ></div>
          <div className="time-value">
            {TimeEnd ? `${parseInt(TimeEnd)} h To End ` : TimeStart ? `${parseInt(TimeStart)} h To Start` : "Time Expired"}
          </div>
        </div>
      </div>
      <div className="column">
        <div className="FirstText">{taskName}</div>
        <div className="secondText">{taskDescription}</div>
      </div>
    </div>
  );
}
