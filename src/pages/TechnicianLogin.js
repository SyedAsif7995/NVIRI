// src/pages/TechnicianLogin.js
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const TechnicianLogin = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', businessName: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Password must be 8 characters or more')
          .matches(/(?=.*[!@#$%^&*])/, 'Password must contain a special character')
          .required('Required'),
        businessName: Yup.string().required('Required'),
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
        
        <label htmlFor="businessName">Business Name</label>
        <Field name="businessName" type="text" />
        <ErrorMessage name="businessName" />
        
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default TechnicianLogin;
