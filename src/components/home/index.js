import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Home = () => {
  const name = Cookies.get('name')
  const topic = Cookies.get('topic')

  if (name === undefined && topic === undefined) {
    return (
      <div>
        <nav>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
        </nav>
        <div>
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic</p>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>

          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </nav>
      <div>
        <h1>Hello {name}</h1>
        <p>Welcome to {topic}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    </div>
  )
}

export default Home
