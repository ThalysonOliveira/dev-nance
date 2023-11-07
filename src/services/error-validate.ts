import { AxiosError } from "axios";
import Toast from "react-native-toast-message";


function toasShowError(text2: string) {
    return Toast.show({
        type: "error",
        text1: "Tivemos um problema...",
        text2: text2,
        visibilityTime: 6000,
    });
}

export default function getErrorResponse<T>(error: T) {
    if (error instanceof AxiosError) {
        return toasShowError(error.response?.data.error)
    }
    if (error instanceof Error) {
        return toasShowError(error.message)
    }
    return toasShowError('Erro interno no servidor')
}