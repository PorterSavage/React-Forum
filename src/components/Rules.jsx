import React from 'react';

function Rules() {
  return (
    <div>
      <div>
        <style>{`
          .rulesList {
            border: 1px solid black;
            margin-right: 8px;
            padding-left: 8px;
            background-color: orange;
          }
        `}</style>
      </div>
      <div className="rulesList">
        <h3>Forum Rules:</h3>
        <p>* Constructive threads only</p>
        <p>* No threads that contain melicious content</p>
        <p>* Be proactive</p>
        <p>* No derogitive posts towards or about others</p>
        <p>* Have fun!</p>
      </div>
    </div>
  );
}

export default Rules;