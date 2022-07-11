/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { deleteReservationFromApi } from '../../reducers/reservations';
import './singlereservation.css';

const SingleReservation = (props) => {
  const { reservation, currentUser } = props;
  const dispatch = useDispatch();
  return (
    <section className="reservation">
      <table id="table">
        <tbody>
          <tr>
            <th>User</th>
            <th>Persones</th>
            <th>Date</th>
            <th>TIme</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{currentUser.name}</td>
            <td>{reservation.persones}</td>
            <td>{reservation.day}</td>
            <td>{reservation.clock}</td>
          </tr>
        </tbody>
      </table>

      <div className="single-reserve-btn">
        <button
          type="button"
          className="btn btn-outline-danger reservation-button"
          onClick={() => dispatch(deleteReservationFromApi(reservation.id))}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

SingleReservation.propTypes = {
  reservation: PropTypes.instanceOf(Object).isRequired,
};
const mapStateToProps = ({ auth: { currentUser } }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(SingleReservation);
