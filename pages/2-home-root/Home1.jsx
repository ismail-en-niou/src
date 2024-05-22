import React, { useState, useEffect } from 'react';
import "./home1.css"
import { Grid, useMediaQuery } from '@mui/material';
import NavInformation from '../../components/1-navInformation/NavInformation'

import Header from '../../components/2-header/Header'
import Show from '../../components/3-showTask/Show'
import Add from '../../components/4-addTask/Add'
import Anali from '../../components/5-analytics/Anali'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  const [showTaskFilter, setShowTaskFilter] = useState({ Time: null, Team: null, Status: null });
  const isMediumScreen = useMediaQuery('(max-width:1060px)');
  const isSmallScreen = useMediaQuery('(max-width:860px)');
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
    
}, []);


  useEffect(() => { 
    window.addEventListener('error', handlePageReload);
    return () => window.removeEventListener('error', handlePageReload);
  }, []);

  const handlePageReload = () => {
    window.location.reload();
  };

  return (
    <Grid className='home1'>
      {!isMediumScreen && (
        <NavInformation />
      )}
      <div className="body">
        <div  className='dash' data-aos="zoom-in">Dashboard Manager</div>
        <div className="sectioons">
          <Grid spacing={3} style={{ display: 'flex', flex: 1, flexDirection: isSmallScreen ? 'column' : 'row', marginLeft: isSmallScreen ? 0 : 15 }}>
            <Grid item xs={6} style={{ height: isSmallScreen ? "57%" : "100%", flex: 1 }}>
              <Header setShowTaskFilter={setShowTaskFilter} />
              <Show showTaskFilter={showTaskFilter} />
            </Grid>
            <Grid item xs={6} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: isSmallScreen ? 0 : 15, paddingRight: isSmallScreen ? 0 : 15 }}>
              <Anali />
              <Add />
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
}
