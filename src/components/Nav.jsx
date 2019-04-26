import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div>
        <style jsx global>{`
          .nav {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-content: center;
            background-image: linear-gradient(white, skyblue);
          }
          .fixed {
            position: fixed;
            width: 100%;
            margin-left: ;
          }
          button {
            background-color: transparent;
            border: none;
            font-size: 15px;
            font-family: sans-serif;
            font-weight: lighter;
            margin-left: 35%;
          }
          button:hover {
            cursor: pointer;
            color: cornflowerblue;
          }
        `}</style>
      </div>
      <div className="fixed">
        <nav className="nav">
          <div>
            <Link to='/'><button>Home</button></Link>
          </div>
          <div>
            <Link to='/about'><button>About</button></Link>
          </div>
          <div>
            <Link to='/contact'><button>Contact</button></Link>
          </div>
          <div>
            <Link to='/createPost'><button>Create Post</button></Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;