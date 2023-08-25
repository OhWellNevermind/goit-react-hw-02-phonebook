import { Formik, Field, ErrorMessage } from 'formik';
import { Label, StyledForm } from './NewContactForm.styled';
import * as Yup from 'yup';

const userSchema = Yup.object({
  name: Yup.string()
    .required('Name is a required field')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces.`
    ),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is a required field'),
});

export const NewContactForm = ({ addNew, setName, setNumber }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={async values => {
        await setName(values.name);
        await setNumber(values.number);
        addNew(values);
      }}
      validationSchema={userSchema}
    >
      <StyledForm>
        <Label>
          <Field name="name" type="text"></Field>
          <ErrorMessage name="name"></ErrorMessage>
        </Label>
        <Label>
          <Field name="number" type="tel" />
          <ErrorMessage name="number"></ErrorMessage>
        </Label>
        <button type="submit">Submit</button>
      </StyledForm>
    </Formik>
  );
};
