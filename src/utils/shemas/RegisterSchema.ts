import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  dateOfBirth: Yup.date().required().typeError('Invalid date, type MM/DD/YYYY'),
});
