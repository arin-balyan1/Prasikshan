import React, { useState } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger icons

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // For dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      style={{
        backgroundColor: "#124D96",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
      }}
    >
      <div
        style={{
          height: 60,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "80px",
          paddingRight: "80px",
        }}
      >
        {/* Logo */}
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <h1 className="font-bold">Prasikshan</h1>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-6 items-center"
          style={{ fontSize: "14px" }}
        >
          <Link to="/">Home</Link>
          <Link to="/aboutssb">About SSB</Link>
          <Link to="/contactus">Support Us</Link>
          <button
            onClick={() => navigate("/alltest")}
            style={{
              backgroundColor: "#00FF11",
              borderRadius: "5px",
              color: "black",
            }}
            className="px-5 py-1.5 font-semibold"
          >
            Start Now
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.8rem",
              cursor: "pointer",
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "#124D96",
            display: "flex",
            flexDirection: "column",
            padding: "10px 20px",
          }}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            style={{ padding: "10px 0", borderBottom: "1px solid #1E5CA8" }}
          >
            Home
          </Link>
          <Link
            to="/aboutssb"
            onClick={() => setIsOpen(false)}
            style={{ padding: "10px 0", borderBottom: "1px solid #1E5CA8" }}
          >
            About SSB
          </Link>
          <Link
            to="/contactus"
            onClick={() => setIsOpen(false)}
            style={{ padding: "10px 0", borderBottom: "1px solid #1E5CA8" }}
          >
            Support Us
          </Link>
          <button
            onClick={() => {
              navigate("/alltest");
              setIsOpen(false);
            }}
            style={{
              marginTop: "10px",
              backgroundColor: "#00FF11",
              borderRadius: "5px",
              color: "black",
              padding: "8px 15px",
              fontWeight: "600",
            }}
          >
            Start Now
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
