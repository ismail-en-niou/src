import React, { useState } from 'react';
import './TaskStatus.css';


function TaskManagementComponent() {
  const [isWorking, setIsWorking] = useState(true);
  const [comment, setComment] = useState('');

  const handleToggleWorking = () => {
    setIsWorking(!isWorking);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Submit the task for processing
    console.log('Task is being moved to working status with comment:', comment);
  };

  return (
    <div className="task-management">
      <div className="progress-indicator">
        <div className="progress-bar-status">
          <div className="status-name" style={{width:"35px"}}><div>Start</div></div>
          <div className="status-name"  style={{width:"70px"}}><div>Working</div></div>
          <div className="status-name"  style={{width:"35px"}}><div>Test</div></div>
          <div className="status-name"  style={{width:"70px"}}><div>Fix Errors</div></div>
          <div className="status-name"  style={{width:"33px"}}><div>End</div></div>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: 445/(4/1),height:"11px", position:"absolute", zIndex:0 }}></div>
          <div className="circle" style={{backgroundColor:"#1DE725"}}></div>
          <div className="circle" style={{backgroundColor:"#007BFF"}}></div>
          <div className="circle" style={{backgroundColor:"#FD7E14"}}></div>
          <div className="circle" style={{backgroundColor:"#DC3545"}}></div>
          <div className="circle" style={{backgroundColor:"#343A40"}}></div>
        </div>
      </div>
      {/* <div className="item-row">
        <div className="id">32</div>
        <div className="start-date">15/05/2024    10:30 AM</div>
        <div className="end-date">17/05/2024    10:30 PM</div>
      </div> */}
      <div className="item-row">
      <div className="id">32</div>
        <div className="start-date">15/05/2024    10:30 AM</div>
        <div className="end-date">17/05/2024    10:30 PM</div>
      </div>
      <div className="status-toggle">
        <div className="status-label">Working</div>
      </div>
      <div className="comment-section">
        <textarea  value={comment} rows="40" cols="50" onChange={handleCommentChange} placeholder="Comment For Push"></textarea>
      </div>
      <div className="actions">
        <button className="cancel-button">X</button>
        <button className="submit-button" onClick={handleSubmit}>Move Task To Working</button>
      </div>
    </div>
  );
}

export default TaskManagementComponent;
