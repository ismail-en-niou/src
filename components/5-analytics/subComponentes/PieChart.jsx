import React from "react";
import { Chart } from "react-google-charts";
import './PieChart.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You may need to import the CSS file as well
import { useEffect } from "react";
export default function PieChart({ bc, fr, ui }) {
  // Ensure bc, fr, and ui are defined before trying to manipulate the
  const bcValue = bc ? parseInt(bc.replace('%', '')) : 0;
  const frValue = fr ? parseInt(fr.replace('%', '')) : 0;
  const uiValue = ui ? parseInt(ui.replace('%', '')) : 0;

  useEffect(() => {
    AOS.init();
  }, []);

  const data = [
    ["Task", "Hours per Day"],
    ["BackEnd", bcValue],
    ["FrontEnd", frValue],
    ["UI/UX", uiValue],
  ];

  return (
    <div className="PieChart"  data-aos="zoom-in">
      <div className="chartContainer">
        <h3><span className='icon-stats-2'  style={{ marginRight:6,fontSize:16}}></span> Relative Work</h3>
        <Chart
          chartType="PieChart"
          width="132px"
          height="132px"
          data={data}
          options={{
            colors: ["#D16BA5", "#5FFBF1", "#86A8E7"],
            pieHole: 0.5,
            is3D: false,
            legend: 'none',
            pieSliceText: "none",
            chartArea: {
              width: "90%",
              height: "90%",
            },
          }}
        />
      </div>
      <div className="legendContainer">
        <div className="legendItem">
          <div className="backend"></div>
          <span className="nameItem"><span className="percentage">{bc}</span> BackEnd</span>
        </div>
        <div className="legendItem">
          <div className="frontend"></div>
          <span className="nameItem"><span className="percentage">{fr}</span> FrontEnd</span>
        </div>
        <div className="legendItem">
          <div className="uiux"></div>
          <span className="nameItem"><span className="percentage">{ui}</span> UI/UX</span>
        </div>
      </div>
    </div>
  );
}
