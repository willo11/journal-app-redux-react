import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";

import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "william",
    email: "william@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("formulario Correcto");
    }
  };

  const isFormValid = () => {
      if (name.trim().length === 0) {
        dispatch(setError('Name Is Required'))
        return false;
      } else if (!validator.isEmail(email)) {
        dispatch(setError('Email not Valid'))
        return false;
      } else if (password !== password2 || password.length < 6) {
        dispatch(setError('Password more than 6 characters and match each other'))
        return false;
      }
      dispatch(removeError());
      return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">HOLA MUNDO</div>

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already Registered?
        </Link>
      </form>
    </>
  );
};
