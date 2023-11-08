import { TouchableOpacityProps } from "react-native";
import { ButtonSubmit } from "./styles";
import { ReactNode } from "react";

interface ButtonPros extends TouchableOpacityProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonPros) {
  return <ButtonSubmit {...rest}>{children}</ButtonSubmit>;
}
