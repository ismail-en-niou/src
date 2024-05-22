import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You may need to import the CSS file as well
import { useEffect } from "react";
export default function App({ day , porcentage  }) {
  useEffect(() => {
    AOS.init({
      duration: 1500
  });
}, []);

  return (

    <div 
    data-aos="zoom-in"
      className="Chart"
      style={{
        width: 133,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 12,
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "4px 0px 12.1px 0px #0000000D",
        borderRadius: 14,
        // marginBottom:20
      }}
    >
      <div
        style={{
          width: 92,
          height: 146,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{
            width: 48,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            backgroundColor: "#86A8E7"
          }}
        >
          <div
            style={{
              width: 47,
              height: porcentage+"%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#2A73FA",
              color: "#fff",
              fontSize: 14,
              fontWeight: "400"
            }}
          >
            {porcentage > 7 ? `${day} d` : ''}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 14,
          fontWeight: "400"
        }}
      >
        Left Days
      </div>
    </div>
  );
}