/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Modal, Form } from 'antd';
import { toast } from 'react-toastify';
import { signupUser } from '../../actions/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './signup.css';

const Signup = () => {
  const dispatch = useDispatch();
  const { register } = useForm();
  const history = useHistory();
  function formData(event) {
    const data = new FormData();
    data.append('user[email]', event.target.email.value);
    data.append('user[password]', event.target.password.value);
  }

  const OnSubmit = async (event) => {
    event.preventDefault();
    const data = formData(event);
    const response = await dispatch(signupUser(data));
    if (response) event.target.reset();
    history.push('/home');
    toast.success('Signup');
  };
  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title=""
        footer={null}
        bodyStyle={{
          backgroundColor: 'rgb(29, 27, 27)',
        }}
        cancelText=""
        onCancel={onCancel}
        onOk={() => {
          form.validateFields().then((values) => {
            form.resetFields();
            onCreate(values);
          });
        }}
      >
        <form
          className="mx-1 mx-md-4"
          onSubmit={(e) => OnSubmit(e)}
          method="post"
        >
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                required
                type="email"
                className="form-control"
                placeholder="Email"
                {...register('email', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                {...register('password', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4cd"
                className="form-control"
                placeholder="Password Confirmation"
                {...register('password_confirmation', {
                  required: true,
                })}
              />
            </div>
          </div>

          <div className="">
            <button type="submit" className="signup-button">
              Register
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    return (
      <div>
        <div className="log-btn">
          <p
            className="p__opensans"
            onClick={() => {
              setVisible(true);
            }}
          >
            Signup
          </p>
        </div>
        <CollectionCreateForm
          visible={visible}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    );
  };
  return (
    <div className="MainDiv">
      <div className="container">
        <CollectionsPage />
      </div>
    </div>
  );
};

export default Signup;
