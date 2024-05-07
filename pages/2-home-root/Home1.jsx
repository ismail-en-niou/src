import React from 'react'
import "./home1.css"
import { Grid, useMediaQuery } from '@mui/material';
import NavInformation from '../../components/1-navInformation/NavInformation'
import Header from '../../components/2-header/Header'
import Show from '../../components/3-showTask/Show'
import Add from '../../components/4-addTask/Add'
import Anali from '../../components/5-analytics/Anali'
export default function Home() {
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  return (
    <div className='home1'>
    {!isMediumScreen && (
          <NavInformation />
      )}
      <div className="body">
        <div className='dash'>Dashboard Manager</div>
        <div className="sectioons">
        <Grid container spacing={3} md={{ display: 'flex', flexDirection: 'column' }}>
            <Grid item style={{backgroundColor: 'blue', }} xs={6} >
              <Header />
              <Show />
            </Grid>
            <Grid item xs={6} sx={{ backgroundColor: 'red', width: '50%' }}>
              <Anali />
              <Add />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
