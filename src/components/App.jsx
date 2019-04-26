import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CreatePost from './CreatePost';

function App() {
  return (
    <div>
      <div>
        <style jsx global>{`
          .background {
            background-image: url("https://i.pinimg.com/originals/79/61/3c/79613c9d885607229dda913c97d9ddc9.jpg")

          }
          .page {
            margin-left: -8px;
            margin-right: -8px;
            margin-top: -17px;
          }
          .nav {
            margin-left: -8px;
            margin-top: -4px;
          }
        `}</style>
      </div>
      <div className="background">
        <div className="nav">
          <Nav/>
        </div>
        <div className="page">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/createPost' component={CreatePost}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;