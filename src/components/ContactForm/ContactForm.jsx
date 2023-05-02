import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { schema } from './schema';
import {
  FormEl,
  FormLabel,
  ErrorText,
  FormInput,
  FormButton,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const onHandleSubmit = (values, { resetForm }) => {
    onSubmit({ ...values });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onHandleSubmit}
    >
      {({ values, handleChange }) => (
        <FormEl autoComplete="off">
          <FormLabel htmlFor="name">
            Name
            <FormInput
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <ErrorText name="name" />
          </FormLabel>
          <FormLabel htmlFor="number">
            Number
            <FormInput
              type="tel"
              name="number"
              value={values.number}
              onChange={handleChange}
            />
            <ErrorText name="number" />
          </FormLabel>

          <FormButton type="submit">Add contact</FormButton>
        </FormEl>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
