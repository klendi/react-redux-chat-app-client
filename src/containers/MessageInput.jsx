import React from 'react'
import store from '../store'
import { addMessage } from '../actions'

export default class MessageInput extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    inputValue: ''
  }

  componentDidUpdate() {
    this.goToBottom()
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  goToBottom = () => {
    let elements = document.getElementsByClassName('msg')
    if (elements.length !== 0) {
      let element = elements[elements.length - 1]
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    let text = this.state.inputValue
    const { ourID, hisID } = this.props
    if (this.props.notUser) {
      store.dispatch(addMessage({ text, hisID, ourID, senderIsOurUser: false }))
    } else {
      if (text === '') return
      store.dispatch(addMessage({ text, hisID, ourID, senderIsOurUser: true }))
    }
    this.setState({ inputValue: '' })
  }

  render() {
    return (
      <form className="message-input" onSubmit={this.onSubmit}>
        <input
          autoFocus
          type="text"
          className="msg-input"
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Write a message"
        />
      </form>
    )
  }
}
