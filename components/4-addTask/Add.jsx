import React, { useState, useEffect } from 'react';
import './Add.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Add() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [team, setTeam] = useState("");
  const [link, setLink] = useState("");
  const [plusPoints, setPlusPoints] = useState(0);
  const [minusPoints, setMinusPoints] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const dashboardData = JSON.parse(localStorage.getItem("dashboardData"));
    if (dashboardData && dashboardData.teams) {
      setTeams(dashboardData.teams);
    }
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })

  }, []);
  const handelClear = () => {
    setTaskName("");
    setTaskDescription("");
    setTeam("");
    setLink("");
    setPlusPoints(0);
    setMinusPoints(0);
    setStartDate("");
    setEndDate("");
  }

  const handleAddTask = () => {
    const taskData = {
      token: localStorage.getItem("token"),
      add: {
        team: team,
        task: taskName,
        description: taskDescription,
        start: `${startDate} 10:30`,
        end: `${endDate} 10:30`,
        point: plusPoints,
        status: "1",
        link: link
      }
    };
    console.log(taskData);
    fetch("https://teamapi.robixe.online/root/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error("Error:", error));
    handelClear();
  };
  return (
    <div className="add-container" data-aos="zoom-in">
      <div className="title-space">
        <h2><span className='icon-add-document-1' style={{ marginRight: 10, fontSize: 22, fontWeight: 600 }}></span>New Task ( Focus In This Staps! )</h2>
      </div>
      <label htmlFor="taskName">Name of Task</label>
      <input
        autoComplete='none'
        type="text"
        id="taskName"
        placeholder="Name of Task"
        className="task-name-input"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label htmlFor="taskDescription">Task Description</label>
      <textarea
        id="taskDescription"
        placeholder="Task Description"
        className="task-textarea"
        style={{ height: "28px" }}
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <div className="input-row">
        <div className="input-culomn input-left">
          <label htmlFor="teamSelect">Select Team</label>
          <select
            id="teamSelect"
            className="task-select"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option value="" disabled>Select Team</option>
            {teams.map((teamOption, index) => (
              <option key={index} value={teamOption.name}>{teamOption.name}</option>
            ))}
          </select>
        </div>
        <div className="input-culomn">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="Link"
            placeholder="Link"
            className="task-input"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-culomn input-left">
          <label htmlFor="startDate" className="label-date">Start Date</label>
          <input
            type="date"
            id="startDate"
            className="task-date"
            value={startDate}

            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="input-culomn">
          <label htmlFor="endDate" className="label-date">End Date</label>
          <input
            type="date"
            id="endDate"
            className="task-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <div className="input-row">
        <div className="input-culomn input-left">
          <label htmlFor="plusPoints">Plus Points</label>
          <input
            type="number"
            id="plusPoints"
            placeholder="Plus Points"
            className="task-input"
            value={plusPoints}
            style={{ width: "176%" }}
            onChange={(e) => setPlusPoints(e.target.value)}
          />
        </div>
      </div>
      <div className="task-buttons-space">
        <div className="task-buttons">
          <div className="clear-btn-space">
            <button className="clear-btn" onClick={handelClear}>Clear</button>
          </div>
          <div className="add-btn-space">
            <button className="add-btn" onClick={handleAddTask}>Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}
