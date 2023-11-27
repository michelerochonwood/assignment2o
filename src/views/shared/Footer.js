import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#343a40", // Assuming the background color is dark
    color: "#fff", // Assuming the text color is light
    padding: "1rem", // Adjust padding as needed
    marginTop: "30px", // Adding a top margin of 30px
  };

  return (
    <div style={footerStyle} className="text-center fixed-bottom">
      <h7>&copy; 2023 | COMP2112 | Assignment 2 Rochon-Wood</h7>
    </div>
  );
}

export default Footer;
