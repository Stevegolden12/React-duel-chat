import React, { Component } from 'react';
import '../App.css';

class ChatWindow extends Component {
  constructor(props) {
    super(props)

    this.isDisabled = this.isDisabled.bind(this);
  }

  state = {
    isButtonDisable: true
  }

  isDisabled = (e) => {
    if (e.target.value === '') {
      console.log("Check disabled")
    } else {
      console.log("Check enabled")
    }
    return false;
  };

  render() {
    console.log(this.props.messages)
    return (
      
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{this.props.users[this.props.index].username}</div>

          <ul className="message-list">
            {this.props.messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === this.props.users[this.props.index].username ? 'message sender' : 'message recipient'
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
            <input type="text" className="form-control" placeholder="Enter your message..." onChange={(e)=>this.isDisabled(e)}/>
              <div className="input-group-append">
                <button className="btn submit-button" disabled={this.state.isButtonDisable}>
                  SEND
                  </button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default ChatWindow