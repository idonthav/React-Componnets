import './App.css';
import React from 'react'

class App extends React.Component{
  // Initiate data
  state = {
    comments: [
      { id: 1, name: 'Jack', content: 'I\'m the first!' },
      { id: 2, name: 'Rose', content: 'I\'m the second!' },
      { id: 3, name: 'Tom', content: 'I\'m the third!'} 
    ],
    userName: '',
    userContent: ''
  }

  // Refactor and abstract RenderList method
  renderList() {
    const { comments } = this.state
    return comments.length === 0 ? (
      <div>No body, post your ides here!</div>
    ) : (
      <ul>
      {comments.map(item => (
        <li key={item.id}>
          <h3>{item.name} says:</h3>
          <p>Comment: {item.content}</p>
      </li>
      ))}
    </ul>
    )
  }

  // Event handler - onChange: get input form data
  handleChange = (e) => {
    const { name, value}  = e.target
    this.setState({
      [name]: value
    })
  }

  // Event handlet - onClick: click btn & render new comment in List
  addComments = () => {
    const { comments, userName, userContent } = this.state
    const newComment = [{
      id: Math.random(),
      name: userName,
      content: userContent
    }, ...comments]
    
    // null check
    if (userName.trim() === '' || userContent.trim() === '') {
      alert("Please input your name and commnents")
      return
    }

    this.setState({
      comments: newComment,
      userName: '',
      userContent: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <input
            type='text'
            placeholder='Input your preferred name'
            name='userName'
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            cols='30'
            rows='10'
            placeholder='What you want to say here'
            name='userContent'
            value={this.state.userContent}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <button onClick={this.addComments}>Post</button>

          {/* render List */}
          {this.renderList()}
          
        </div>
      </div>
    )
  }
}


export default App;
