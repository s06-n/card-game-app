import React, { useState } from "react";
import "./TeamMember.css";

function TeamMemberCard({ name, facts }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`team-member-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="team-member-content">
        <div className={`team-member-side front`}>
          <h2 className="team-member-name">{name}</h2>
        </div>
        <div className={`team-member-side back ${isFlipped ? "visible" : ""}`}>
          <ul className="team-member-facts">
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
