import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#343a40", 
    color: "#fff", 
    padding: "1rem", 
    marginTop: "30px", 
  };

  return (
    <div style={footerStyle} className="text-center fixed-bottom">
      <h7>&copy; 2023 | COMP2112 | Assignment 2 Rochon-Wood</h7>
    </div>
  );
}

export default Footer;
