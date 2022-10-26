import * as yup from 'yup';
import { emailSchema, passwordSchema } from 'utils';

const rules = yup.object({
  email: emailSchema(),
  password: passwordSchema(),
});

export default rules;
