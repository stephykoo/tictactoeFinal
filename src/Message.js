import React, {Component} from 'react'

class Message extends Component {
  render(props) {
    return(
      <div>
        <h1>{this.props.message} </h1>
      </div>

    )
  }
}


export default Message
