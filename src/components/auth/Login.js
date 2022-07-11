/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Modal, Form } from 'antd';
import { toast } from 'react-toastify';
import { loginUser } from '../../actions/auth';
import 'antd/dist/antd.css';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [message, setMessage] = useState();

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .then(() => history.push('/'))
      .catch(() => setMessage({ error: true }));
    toast.success('Login');
    history.push('/');
  };
  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title=""
        footer={null}
        bodyStyle={{
          backgroundColor: '#000',

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
        <p className="h-8 text-red-400">
          {message && 'Invalid email or password'}
        </p>
        <form
          className="mx-1 mx-md-4"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                placeholder="Email"
                required
                {...register('email', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4c"
                className="form-control"
                placeholder="Password"
                required
                {...register('password', { required: true })}
              />
            </div>
          </div>

          <div className="">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <div className="log-btn">
          <p
            className="p__opensans"
            onClick={() => {
              setVisible(true);
            }}
          >
            Login
          </p>
        </div>
        <CollectionCreateForm
          visible={visible}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </>
    );
  };
  return (
    <div className="but">
      <div className="kut">
        <CollectionsPage />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginUser: (credentials) => dispatch(loginUser(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
