import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';

import forgetPassShema from './forgetPassShema';
import { NavLink } from 'react-router-dom';

import css from './forgetPass.module.scss';
import { forgetPassword } from 'redux/auth/auth-operation';

const ForgetPass = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (user, { resetForm }) => {
    console.log(user);
    dispatch(forgetPassword(user));
    resetForm();

    // try {
    //   const response = await dispatch(forgetPassword(user));
    //   const data = response.payload;

    //   if (data && data.token) {
    //     resetForm();
    //   } else {
    //     toast.error('Incorrect email or password provided');
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ email: '' }}
      validationSchema={forgetPassShema}
    >
      <Form className={css.formContainer}>
        <div className={css.formNav}>
          <NavLink className={css.register} to="register" underline="none">
            Registration
          </NavLink>
          <NavLink className={css.login} to="login" underline="none">
            Log In
          </NavLink>
        </div>
        <div className={css.inputContainer}>
          <Field name="email" type="email" placeholder="Enter your email" />
          <ErrorMessage className={css.errmes} name="email" component="div" />
        </div>
        <button className={css.logInButton} type="submit">
          Send letter
        </button>
      </Form>
    </Formik>
  );
};

export default ForgetPass;
