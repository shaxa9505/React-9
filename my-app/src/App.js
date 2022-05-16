import React, { Component } from 'react'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 1, name: "JavaScript"},
        {id: 2, name: "React js"},
        {id: 3, name: "Vue js"}
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, index) => (
          /* <h1 key={index}>{post.name}</h1> */
          {/* <h1 key={post.id}>{post.name}</h1> */}
        ))}
      </div>
    )
  }
}

export default App