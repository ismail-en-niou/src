import './NavBar.css';

function Navbar() {
    return (
      <nav className="navbar">
        {/* Assuming you have icons for battery, profile, etc. */}
        <div className="left-items">
          <i className="icon-battery"></i>
          <i className="icon-profile"></i>
        </div>
        <div className="right-items">
          <i className="icon-time"></i>
          <span>100h</span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;