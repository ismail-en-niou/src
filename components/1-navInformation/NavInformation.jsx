import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavInformation.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function NavInformation() {
    const [root, setRoot] = useState({});
    const [project, setProject] = useState({});
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/root");
    }
    useEffect(() => {
        AOS.init({
          duration: 1500,
        })   
      }, []);
    useEffect(() => {
        const dataroot = JSON.parse(localStorage.getItem("datauser"));
        const dataProject = JSON.parse(localStorage.getItem("dataproject"));
        if (dataroot) setRoot(dataroot);
        if (dataProject) setProject(dataProject);

        const intervalId = setInterval(checkSession, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const checkSession = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/root");
        }
    }
    return (
        <div className='nav' data-aos="fade-right">
            <div className="logo">
                <img src="/images/Vector.svg" alt="test" />
                <div>
                    <h1>Robixe Manager</h1>
                    <p>Team Management System</p>
                </div>
            </div>
           
            <div className="info">
                <div className='user'>
                    <span><img src="/images/employee-man-alt(1) 1.svg" alt="" srcset="" /></span>
                    <p>{root.first} {root.last}</p>
                </div>
                <div>
                    <span><img src="/images/users(1) 1.svg" alt="" srcset="" /></span>
                    <h3>{root.role}</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-load-balancer'></span>
                    <h3>Leader</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-business'></span>
                    <h3>{project.name}</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span><img src="/images/house-building(1) 1.svg" alt="" srcset="" /></span>
                    <h3>{root.decisions}</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-currency-dollar'></span>
                    <h3>{root.money}</h3>
                </div>
            </div>
            <div className="divider"></div>
            <div className="btns">
                <a href="https://discord.gg/tcVV3CWP" target='_blank' rel="noopener noreferrer">
                    <button><span className='icon-discord1'></span> Discord Link</button>
                </a>
                <button type="button" className='btn' onClick={handleLogout}>
                    <span className='icon-log-out'></span> Log Out
                </button>
            </div>
        </div>
    );
}
