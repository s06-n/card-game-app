import './flippable-card.css';
import Card from "./card/card";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function FlippableCard({ frontContent, backContent }) {
    const [showFront, setShowFront] = useState(true);
  
    return (
      <div className="flippable-card-container">
        <CSSTransition
          in={showFront}
          timeout={300}
          classNames='flip'
        >
          <Card onClick={() => setShowFront(!showFront)} frontContent = {frontContent} backContent = {backContent} >
          </Card>
        </CSSTransition>
      </div>
    );
  }
  
  export default FlippableCard;