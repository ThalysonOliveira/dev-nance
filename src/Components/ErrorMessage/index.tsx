import { ReactNode } from "react";
import { TextError } from "./styles";
import { TextProps } from "react-native";

interface TextErrorProps extends TextProps {
  children: ReactNode;
}

export function ErrorMessage({ children, ...rest }: TextErrorProps) {
  return <TextError {...rest}>{children}</TextError>;
}
