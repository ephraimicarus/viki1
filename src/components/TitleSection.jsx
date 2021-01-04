import React from "react";
import "../css/TitleSection.css";

function TitleSection(props) {
  return (
    <div className="title-section">
      <div className="title-section-container">
        <div className="logo-main-section">
          <div className="logo-main-container">
            <div className="logo-main">LOGO</div>
          </div>
        </div>
        <div className="language-selector"></div>
      </div>
    </div>
  );
}

export default TitleSection;
