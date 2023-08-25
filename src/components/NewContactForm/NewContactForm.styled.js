import { styled } from 'styled-components';
import { Form } from 'formik';
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled(Form)`
  width: 400px;
  gap: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
