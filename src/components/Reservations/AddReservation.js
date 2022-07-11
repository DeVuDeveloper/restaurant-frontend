/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import Signbar from '../Signbar/Signbar';
import Navbar from '../Navbar/Navbar';
import { addReservationToAPI } from '../../reducers/reservations';
import './addreservation.css';

const AddReservation = ({ currentUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <section className="form-wrapper">
      <Signbar />
      <Navbar />
      <div className="back">
        <NavLink to="/">
          <TiArrowBackOutline className="back-button" />
        </NavLink>
      </div>
      <h3 className="add-reservation-title">MAKE YOUR RESERVATION</h3>
      <hr className="line" />
      <h5 className="reservation-description">
        For those who have a sweet tooth, we offer homemade desserts like
        Italian style cheesecake, tiramisu and cannoli.
      </h5>

      <div className="txtWrapper">
        <Formik
          initialValues={{
            persones: '',
            day: '',
            clock: '',
            user_id: currentUser.id,
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            dispatch(addReservationToAPI(values));
            resetForm();
            setSubmitting(false);
            history.push('/reservations');
            toast.success('Reservation added succesfully');
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="reservation-flex">
                <select
                  value={values.persones}
                  name="persones"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="persones"
                  required
                >
                  <option value="" selected disabled hidden>
                    Persones
                  </option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                  <option value="Five">Five</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                  <option value="Eight">Eight</option>
                  <option value="Nine">Nine</option>
                </select>
                <input
                  name="day"
                  onChange={handleChange}
                  type="date"
                  value={values.day}
                  onBlur={handleBlur}
                  required
                />
                <input
                  name="clock"
                  onChange={handleChange}
                  type="time"
                  value={values.clock}
                  onBlur={handleBlur}
                  required
                />

              </div>
              <div className="reservation-button-container">
                <button
                  className="add-reservation-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add Reservation
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};
const mapStateToProps = ({ auth: { currentUser } }) => {
  console.log(currentUser);
  return { currentUser };
};

export default connect(mapStateToProps)(AddReservation);
