import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleReservation from './SingleReservation';
import { getReservationsFromAPi } from '../../reducers/reservations';
import './reservations.css';

function Reservations() {
  const reservations = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservationsFromAPi());
  }, [dispatch]);
  return (
    <section className="my-reservations">
      <div className="table-reservations">
        <div className="reservation-title">
          <h2>Reservations</h2>
        </div>
        <div className="reservations-loop">
          {reservations && reservations.map((reservation) => (
            <SingleReservation reservation={reservation} key={reservation.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reservations;
