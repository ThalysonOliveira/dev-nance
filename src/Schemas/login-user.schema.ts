import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const loginUserSchemaValidation = yup.object({
    email: yup.string().email("Email invalido").required("Informe o seu email"),
    password: yup
        .string()
        .required("Informe a senha")
        .min(6, "A senha deve conter pelo menos 6 caracteres"),
});

export const loginUserYupResolver = yupResolver(loginUserSchemaValidation)