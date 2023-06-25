import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().required('Обов`язкове поле').max(30, 'ім`я має містити мксимум 30 символів'),
  number: yup
    .string()
    .required('Обов`язкове поле')
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Номер телефону має містити 7 цифр і мати такий формат xxx-xx-xx'
    ),
});
