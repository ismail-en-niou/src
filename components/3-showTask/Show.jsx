import React, { useEffect, useState } from 'react';
import './Show.css';
import TaskCard from './subComponentes/TaskCard';
import { useNavigate } from 'react-router-dom';
import compareDates from '../../helpers/functions/compareDates'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Show({ showTaskFilter }) {
  const [tasks, setTasks] = useState([]);
  const now = new Date();
  const statusLabels = {
    0: 'Not Started',
    1: 'Started',
    2: 'Time Expired',
    3: 'Waiting',
  };

  const teamLabels = {
    "backend": 'Back End',
    "frontend": 'Front End',
    "ui_ux": 'UI/UX'
  };
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    
}, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(`/root`);
    }else{
      navigate(`/root/home`);
    }
    const fetchData = async () => {
      try {
        const storedData = JSON.parse(localStorage.getItem('dashboardData'));
        if (storedData && storedData.tasks) {
          setTasks(storedData.tasks);
        }


        const formData = { token };
        const response = await fetch(`https://teamapi.robixe.online/root/dashboard`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (data.code === 1) {
          localStorage.setItem('dashboardData', JSON.stringify(data));
          localStorage.setItem("dataproject", JSON.stringify(data.project));
          localStorage.setItem("datauser", JSON.stringify(data.root));
          setTasks(data.tasks);
        }else{
          navigate("/root");
          localStorage.clear("token");
          localStorage.clear('dashboardData');
          localStorage.clear("dataproject");
          localStorage.clear("datauser");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
  }, [navigate]);


  // Filter the tasks based on the showTaskFilter object
  const filteredTasks = tasks.filter(task => {
    if (showTaskFilter.Time === null && showTaskFilter.Team === null && showTaskFilter.Status === null) {
      return true; 
    }
    const isTimeMatch = showTaskFilter.Time && task.start !== undefined && compareDates({ dateString: task.start }).includes(showTaskFilter.Time);
    const isTeamMatch = showTaskFilter.Team && task.team !== undefined && teamLabels[task.team] == showTaskFilter.Team;
    const isStatusMatch = showTaskFilter.Status && task.status !== undefined && statusLabels[task.status] == showTaskFilter.Status;
  
    return (isTimeMatch || showTaskFilter.Time === null) &&
           (isTeamMatch || showTaskFilter.Team === null) &&
           (isStatusMatch || showTaskFilter.Status === null);
  });




  return (
    <div data-aos="zoom-in" className="containerShow" style={{ overflow: 'scroll',zIndex: -8 }}>
      {filteredTasks.map((task, index) => {
        const totalTime = task.difference;
        const elapsedTime = task.difference - task.to_end;
        const timeProgress = elapsedTime * 100 / totalTime;
        return (
          <TaskCard  
            key={index}
            Time={timeProgress}
            TimeEnd={task.to_end}
            TimeStart={task.to_start}
            index={task.id}
            team={
              teamLabels[task.team]
            }
            Status={
              statusLabels[task.status]
            }
            taskName={task.taskName}
            taskDescription={task.description}
          />
        );
      })}
    </div>
  );
}
