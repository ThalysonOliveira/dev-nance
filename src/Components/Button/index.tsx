import { TouchableOpacityProps } from "react-native";
import { ButtonSubmit, TextSubmit } from "./styles";
import { ReactNode } from "react";

export type PropsButtonStyle = {
  color?: string;
};

interface ButtonPros extends TouchableOpacityProps, PropsButtonStyle {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonPros) {
  return (
    <ButtonSubmit {...rest}>
      <TextSubmit>{children}</TextSubmit>
    </ButtonSubmit>
  );
}
