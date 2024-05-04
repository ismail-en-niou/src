import React from 'react'
import "./home1.css"
import NavInformation from '../../components/1-navInformation/NavInformation'
import Header from '../../components/2-header/Header'
import Show from '../../components/3-showTask/Show'
import Add from '../../components/4-addTask/Add'
import Anali from '../../components/5-analytics/Anali'
export default function Home() {
  return (
    <div className='home1'>
      <NavInformation />
      <div className="body">
        <div className='dash'>Dashboard Manager</div>
        <div className="sectioons">
          <section className="leftsection">
            <Header />
            <Show />
          </section>
          <section className="rightsection">
            <Anali />
            <Add />
          </section>
        </div>
      </div>
    </div>
  )
}
