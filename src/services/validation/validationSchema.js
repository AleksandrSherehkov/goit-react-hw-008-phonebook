import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .test('trim', 'The field must not start or end with spaces', value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required('required field')
    .max(30, 'the name must contain a maximum of 30 characters'),
  number: yup
    .string()
    .required('required field')
    .test('trim', 'The field must not start or end with spaces', value => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'The phone number must contain 7 digits and have the following format: xxx-xxx-xxxx'
    ),
});
