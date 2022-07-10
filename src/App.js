import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BookTable from './components/BookTable';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
