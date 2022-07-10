import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BookTable from './components/BookTable';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import withAuth from './components/auth/withAuth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/book_table"
            component={withAuth(BookTable)}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
