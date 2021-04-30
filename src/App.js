import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './itemDetail'

function App() {
  return (
    // Everything inside "Router" is subject to be routed
    <Router>
      <div className="App">
        {/* Nav is always on top, not to be routed */}
        <Nav />
        {/* Switch prevents the home page (in this case) to be present in all the routes */}
        <Switch>
          {/* path = "/about" specifies the route nested in the main url
          component = {About} sets the component to be routed 
          exact is to indicate Switch to only show Home Page
          when it is the exact (root) route*/}
          <Route path = "/" exact component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/shop" exact component = {Shop} />
          <Route path = "/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
