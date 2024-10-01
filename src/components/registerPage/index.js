import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Beauty',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Registration extends Component {
  state = {
    topic: topicsList[0].displayText,
    name: '',
    errorMsg: '',
  }

  nameInputHandler = event => {
    this.setState({name: event.target.value})
  }

  topicHandler = event => {
    this.setState({topic: event.target.value})
  }

  onRegistration = event => {
    event.preventDefault()
    const {name, topic} = this.state
    if (name !== '') {
      const {history} = this.props
      Cookies.set('name', name, {expires: 30})
      Cookies.set('topic', topic, {expires: 30})

      history.replace('/')
    } else {
      this.setState({
        errorMsg: 'Please enter your name',
      })
    }
  }

  render() {
    const {name, topic, errorMsg} = this.state

    return (
      <div>
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <form onSubmit={this.onRegistration}>
            <h1>Let us join</h1>
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="your name"
              onChange={this.nameInputHandler}
            />
            <label htmlFor="topic">TOPIC</label>
            <select id="topic" value={topic} onChange={this.topicHandler}>
              {topicsList.map(eachTopic => (
                <option key={eachTopic.id} value={eachTopic.displayText}>
                  {eachTopic.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Register Now</button>
            {errorMsg && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Registration)
