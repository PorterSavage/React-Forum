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
            opacity: 0.8;
            background-image: url("https://66.media.tumblr.com/f363bc2f0d655d3505dbb16dae0119e2/tumblr_ogli3pzLfd1smiv11o1_400.png");
            background-image: cover;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            font-size: 18px;
            color: rgb(0,255,90);
            text-align: center;
            -webkit-animation: glow 1s ease-in-out infinite alternate;
            -moz-animation: glow 1s ease-in-out infinite alternate;
            animation: glow 1s ease-in-out infinite alternate;
          }

          @-webkit-keyframes glow {
            from {
              text-shadow: 0 0 10px rgb(255,0,78), 0 0 20px rgb(255,0,78), 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
            }
            to {
              text-shadow: 0 0 20px rgb(255,0,78), 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
            }
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