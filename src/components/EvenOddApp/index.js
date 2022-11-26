// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const {number} = this.state
    this.setState(prevState => ({
      number: prevState.number + Math.ceil(Math.random() * 100),
    }))
    console.log(number)
  }

  EvenOdd = () => {
    const {number} = this.state
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const text = this.EvenOdd()
    const {number} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Count {number}</h1>
        <div className="container">
          <p className="heading2">Count is {text}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
