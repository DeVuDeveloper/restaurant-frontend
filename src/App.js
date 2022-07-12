import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Reservations from './components/Reservations/Reservations';
import AddReservation from './components/Reservations/AddReservation';
import PhoneVerification from './components/Phone/PhoneVerification';
import withAuth from './components/auth/withAuth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/reservations"
            component={withAuth(Reservations)}
          />
          <Route path="/add_reservations" component={withAuth(AddReservation)} />
          <Route path="/verify" component={withAuth(PhoneVerification)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
