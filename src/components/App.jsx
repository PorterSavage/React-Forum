import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CreatePost from './CreatePost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
    this.handleAddingPostToList = this.handleAddingPostToList.bind(this);
  }

  handleAddingPostToList(post) {
    let newPostList = this.state.postList.slice();
    newPostList.push(post);
    this.setState({ postList: newPostList });
  }

  render() {
    return (
      <div className="background">
        <div>
          <style jsx global>{`
            body {
              background-image: url("https://i.pinimg.com/originals/79/61/3c/79613c9d885607229dda913c97d9ddc9.jpg");
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
        <div>
          <div className="nav">
            <Nav/>
          </div>
          <div className="page">
            <Switch>
              <Route 
              exact path='/'
              render={(props) => <Home { ...props } postList={this.state.postList}/> } />
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route 
              path='/createPost'
              render={(props) => <CreatePost { ...props } onAddPostToList={e => this.handleAddingPostToList(e)} /> } />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;