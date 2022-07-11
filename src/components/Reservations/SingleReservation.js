/* eslint-disable jsx-a11y/alt-text */
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
      <div className="table-user-photo">
        <img src={currentUser.image_url} />
      </div>
      <div className="table-reservation">
        <h2 className="reservation-persones">{currentUser.email}</h2>
      </div>
      <div className="table-reservation">
        <h2 className="reservation-persones">{reservation.persones}</h2>
      </div>
      <div className="table-reservation">
        <h2 className="reservation-day">{reservation.day}</h2>
      </div>
      <div className="table-reservation">
        <h2 className="reservation-clock">
          {reservation.clock}
        </h2>
      </div>
      <div className="">
        <button
          type="button"
          onClick={() => dispatch(deleteReservationFromApi(reservation.id))}
          className="delete-button"
        >
          Delete
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
