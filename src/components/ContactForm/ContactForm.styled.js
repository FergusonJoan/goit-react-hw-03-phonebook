import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;
export const FormInput = styled(Field)`
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 3px;
  width: 300px;
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const FormButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  border: 1px solid;
  border-radius: 3px;
`;
