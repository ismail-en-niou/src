import React from 'react'
import Chart from './subComponentes/Chart';
import PieChart from './subComponentes/PieChart';
import { useState , useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./anali.css"
export default function Anali() {
  
useEffect(() => {
  AOS.init({
    duration: 1500,
  })
  
}, []);
  const [root, setRoot] = useState({});
  const [project, setProject] = useState({});
  const dataProject = JSON.parse(localStorage.getItem("dataproject"));
  const dataroot = JSON.parse(localStorage.getItem("datauser"));
  useEffect(() => {
    setRoot(dataroot);
    setProject(dataProject);
  }, []);
  return (
    <div 
    className='style'
     
    >
      <PieChart  bc={project.backend} fr={project.front} ui={project["ui/ux"]} ></PieChart>
      <Chart   day={project.days_left} porcentage={ (project.days_total - project.days_left) * 100 / project.days_total} />
    </div>
  )
}
