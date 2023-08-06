import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { themeState } from 'redux/theme/themeSlice';
import { selectCurrentTheme } from 'redux/auth/auth-slice';
import { Formik } from 'formik';
import { Field } from 'formik';
import Icon from 'components/icon/Icon';
import DateCalendar from 'components/calendar/DatePicker';
import './addCardForm.scss';

const AddCardForm = ({
  columnId = null,
  taskId = null,
  // data: { title, description, labelColor, deadline },
  data: { title, description, labelColor, deadline } = {},
}) => {
  const [date, setDate] = useState('');

  const getDeadline = value => {
    setDate(value);
    console.log(date);
  };
  // const theme = useSelector(themeState);
  const theme = useSelector(selectCurrentTheme);

  return (
    <Formik
      initialValues={{
        // title: title ? title : '',
        // desc: description ? description : '',
        // priority: labelColor ? labelColor : 'without',
        title: title || '',
        desc: description || '',
        priority: labelColor || 'without',
      }}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Required';
        }
        if (!values.desc) {
          errors.desc = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (!columnId && taskId) {
          //Робимо PATCH запит при сабміті
          setSubmitting(false);
        } else if (!taskId && columnId) {
          //Робимо POST запит при сабміті
          setSubmitting(false);
        } else {
          setSubmitting(false);
          return;
        }
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
        <form className={`add-form theme-${theme}`} onSubmit={handleSubmit}>
          <p className={`add-form-title theme-${theme}`}>
            {columnId && taskId ? 'Edit card' : 'Add card'}
          </p>
          <div className="add-form-wrap">
            <div className="add-form-email-wrap">
              <input
                className={`add-form-input email theme-${theme}`}
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <p className={`add-form-input-error theme-${theme}`}>
                {errors.title && touched.title && errors.title}
              </p>
            </div>
            <div className="add-form-desc-wrap">
              <textarea
                className={`add-form-input desc theme-${theme}`}
                rows={7}
                name="desc"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desc}
              />
              <p className={`add-form-input-error theme-${theme}`}>
                {errors.desc && touched.desc && errors.desc}
              </p>
            </div>
            <div>
              <div>
                <p className={`add-form-group-title theme-${theme}`}>
                  Label color
                </p>
                <div
                  className="add-form-radio-group"
                  role="group"
                  aria-labelledby="priority-group"
                >
                  <label className="add-form-radio low">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="low"
                    />
                    <span className="outer-circle"></span>
                    <span className="inner-circle"></span>
                  </label>
                  <label className="add-form-radio medium">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="medium"
                    />
                    <span className="outer-circle"></span>
                    <span className="inner-circle"></span>
                  </label>
                  <label className="add-form-radio high">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="high"
                    />
                    <span className="outer-circle"></span>
                    <span className="inner-circle"></span>
                  </label>
                  <label className="add-form-radio without">
                    <Field
                      className="visually-hidden"
                      type="radio"
                      name="priority"
                      value="without"
                    />
                    <span className={`outer-circle theme-${theme}`}></span>
                    <span className={`inner-circle theme-${theme}`}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="add-form-deadline">
              <p className={`add-form-deadline-title theme-${theme}`}>
                Deadline
              </p>
              <DateCalendar getDeadline={getDeadline} />
            </div>
            <button
              className={`add-form-submit theme-${theme}`}
              type="submit"
              disabled={isSubmitting}
            >
              <div className={`add-form-icon-wrap theme-${theme}`}>
                <Icon id="plus" width={14} height={14} />
              </div>
              {columnId && taskId ? 'Edit' : 'Add'}
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddCardForm;
