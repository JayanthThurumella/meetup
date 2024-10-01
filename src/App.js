import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/home'
import Registration from './components/registerPage'
import NotFound from './components/notfound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Registration} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/" />
  </Switch>
)

export default App
