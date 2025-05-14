import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  // Close sidebar on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && <div className="backdrop" />}
      <div className="navbar-header">
        {isSidebarOpen && (
          <div
            className="navbar-links-sidebar"
            ref={sidebarRef}
          >
            <ul>
              <li><a href="#">All Pets <span><FontAwesomeIcon icon={faChevronDown} /></span></a></li>
              <li><a href="#">Adopt a Pet</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Communities</a></li>
              <li><a href="#">Missing Pet</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Directory  <span><FontAwesomeIcon icon={faChevronDown} /></span></a></li>
            </ul>
          </div>
        )}

        <div className="logo-section">
          <img
            src="../public/petlogoblack.svg"
            alt="petOnLogo"
            style={{ width: "150px", cursor: "pointer" }}
          />
        </div>

        <div className="navbar-links">
          <a href="http://localhost:5173/">All Pets <span><FontAwesomeIcon icon={faChevronDown} /></span></a>
          <a href="http://localhost:5173/adoptions">Adopt a Pet</a>
          <a href="http://localhost:5173/events">Events</a>
          <a href="http://localhost:5173/communities">Communities</a>
          <a href="#">Missing Pet</a>
          <a href="#">Resources</a>
          <a href="#">Directory <span><FontAwesomeIcon icon={faChevronDown} /></span></a>
        </div>

        <div className="hamburger-icon" onClick={() => setIsSidebarOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="login-section">
          <button>Log in</button>
        </div>
      </div>
    </>
  );
}
