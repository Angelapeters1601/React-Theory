import React, { useState } from "react";

function TabInfo({ theory }) {
  const [likes, setLikes] = useState(0);
  const [showDetails, setShowDetails] = useState(true);

  const handleIncLikes = () => {
    setLikes((currState) => currState + 1);
  };

  const handleTripleLikes = () => {
    setLikes((currState) => currState + 3);
  };

  const handleShowDetails = () => {
    setShowDetails((currState) => !currState);
  };

  const handleUndo = () => {
    setLikes(0);
    setShowDetails(true);
  };

  const handleUndoAfter = () => {
    setTimeout(handleUndo, 3000);
  };

  return (
    <div className="tab-info">
      <h3>{theory.title}:</h3>

      {showDetails && <p>{theory.summary}</p>}

      <div className="tab-info-details">
        <div className="tab-top">
          <div className="display-btn">
            <button onClick={handleShowDetails}>
              {showDetails ? "Hide" : "Show"} details
            </button>
          </div>
          <div className="heart-counter">
            <span>{likes} ❤️</span>
            <button onClick={handleIncLikes}>+</button>
            <button onClick={handleTripleLikes}>+++</button>
          </div>
        </div>

        <div className="tab-undo">
          <button onClick={handleUndo}>undo</button>
          <button onClick={handleUndoAfter}>undo in 3s</button>
        </div>
      </div>
    </div>
  );
}

export default TabInfo;
