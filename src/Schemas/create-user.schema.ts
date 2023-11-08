import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const createUserSchemaValidation = yup.object({
    name: yup
        .string()
        .required("Informe seu nome")
        .min(6, "Deve conter pelo menos 6 caracteres"),
    email: yup.string().email("Email invalido").required("Informe o seu email"),
    password: yup
        .string()
        .required("Informe a senha")
        .min(6, "A senha deve conter pelo menos 6 caracteres"),
});

export const createUserYupResolver = yupResolver(createUserSchemaValidation)