import React from 'react';

// Assuming you have components for each part of your dashboard
import Navbar from '../../components/user/1-NavBar/NavBar';
import TaskSection from '../../components/user/2-TaskSection/TaskSection';
import Sidebar from '../../components/user/3-SideBar/SideBar';
// In DashboardPage.js
import './Home2.css';


function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <div className="content-area">
          <Sidebar />
          <div className='side-task'>
           <Navbar />
           <TaskSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
