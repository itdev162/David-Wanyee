/* jshint esversion: 6 */ 
import './App.css';
import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    values:[],
    posts:[],
    post:null
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
    .then((response) => {
      this.setState({
        values:response.data
      });
    })
      .catch((error) => {
          console.error('Error fetching data: $(error)');
      });
    }

  viewPost = (post) => {
    console.log('view' (post.title));
    this.setState({
        post: post
    });
  } 

  deletePost = post =>{
    axios
      .delete('http://localhost:5000/api/post/$(post.id)')
      .then(response =>{
        const newPosts = this.state.posts.filter(p => p.id !==post.id);
         this.setState({
          posts: [...newPosts]
        });
      })
      .catch(error => {
        console.error('Error deleting post: $(error)');
      })
  }

  render(){
    const{posts, post} = this.state;

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Blogbox
          </header> 
          <main className= "App-content">
            <Switch>
              <Route exact path="/">
                <PostList 
                posts={posts} 
                clickPost={this.viewPost}
                deletePost={this.deletePost}
                />
              </Route>
              <Route path= "/posts/:postId">
                <Post post={post}/>
              </Route>
            </Switch>
          </main>
        {this.state.values.map((value) => <div key={value}>{value}</div>)} 
        </div>
      </Router>
    );
  }
}

export default App;
