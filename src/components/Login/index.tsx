import { Formik } from 'formik';
import React from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import objectApi from '../../api/objectApi';
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <Container maxWidth="xs" className={classes.container}>
      <img src="/logo.svg" alt="image" width={100} className={classes.logo}/>
      <Typography variant="h4" align="center" gutterBottom component="h1">
        Login
      </Typography>
      <Formik
        initialValues={{key: ''}}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              variant="outlined"
              margin="normal"
              label="Key"
              placeholder="Enter Key"
              name="key"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.key}
              error={touched.key && Boolean(errors.key)}
              helperText={touched.key && errors.key}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting || !values.key}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
