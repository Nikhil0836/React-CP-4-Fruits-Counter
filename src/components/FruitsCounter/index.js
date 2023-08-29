// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-container">
        <div className="bg-fruits-counter-card">
          <h1 className="heading">
            Bob ate <span className="mango-count">{mangoes}</span> mangoes{' '}
            <span className="banana-count">{bananas}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-card">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                className="mango-btn"
                type="button"
                onClick={this.eatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-card">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                className="mango-btn"
                type="button"
                onClick={this.eatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
