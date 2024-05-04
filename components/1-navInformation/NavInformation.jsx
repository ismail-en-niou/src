import React, { useState , useEffect } from 'react'
import "./NavInformation.css"
export default function NavInformation() {
   
    return (
        <div className='nav'>
            <div className="logo">
                <img src="/images/Vector.svg" alt="test" />
                <div>
                    <h1>Robixe Manager</h1>
                    <p>Team Management System</p>
                </div>
            </div>
            <div className='user'>
                    <span className='icon-user'></span>
                    <h3>Ismail enniou</h3>
            </div>
            <div className="info">
                <div>
                    <span className='icon-group'></span>
                    <h3>Backend</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-load-balancer'></span>
                    <h3>Leader</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-business'></span>
                    <h3>RTMS</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-piechart'></span>
                    <h3>50%</h3>
                </div>
                <div className="divider"></div>
                <div>
                    <span className='icon-currency-dollar'></span>
                    <h3>10%</h3>
                </div>
            </div>
            <div className="divider"></div>
            <div className="btns">
                <a href="https://discord.gg/tcVV3CWP"  target='block'>
                <button ><span className='icon-discord'></span> Discord Link</button>
                </a>
                <button type="button" className='btn'> <span className='icon-switch'></span>Log Out</button>
            </div>
        </div>

    )
}
