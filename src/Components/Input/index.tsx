import { TextInputProps } from "react-native";
import { InputText } from "./styles";

interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  return <InputText {...rest} />;
}
