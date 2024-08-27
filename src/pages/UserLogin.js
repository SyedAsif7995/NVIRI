// src/pages/UserLogin.js
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const UserLogin = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Password must be 8 characters or more')
          .matches(/(?=.*[!@#$%^&*])/, 'Password must contain a special character')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        // Handle login logic
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default UserLogin;
