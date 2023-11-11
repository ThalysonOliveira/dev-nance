import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { TypesEnum } from '../Forms/New';

const newRegisterSchemaValidation = yup.object({
    description: yup
        .string()
        .required("Informe a descrição")
        .min(6, "Deve conter pelo menos 6 caracteres"),
    value: yup
        .number()
        .required("Informe o valor")
        .min(1, "O valor não pode ser inferior a 0"),
    type: yup
        .string<TypesEnum>()
        .required('Informe o tipo de registro')
});

export const newRegisterYupResolver = yupResolver(newRegisterSchemaValidation)