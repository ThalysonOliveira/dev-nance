import { ReactNode, createContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ApiConfig, getErrorResponse } from "../Services";
import { AuthRoutesProps } from "../Routes/auth.routes";

export type User = {
  id: string;
  name: string;
  email: string;
};

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

export type AuthenticateUserInput = {
  email: string;
  password: string;
};

type AuthContextProps = {
  user: User | undefined;
  signUp: (userInput: CreateUserInput) => void;
  signIn: (authenticateInput: AuthenticateUserInput) => void;
  loadingAuth: boolean;
  signed: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [loadAuth, setLoadAuth] = useState<boolean>(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRoutesProps>>();

  const createUser = useMutation({
    mutationFn: async ({ name, email, password }: CreateUserInput) => {
      await ApiConfig.post("/users", {
        name,
        email,
        password,
      });
    },
    onError(error) {
      return getErrorResponse(error);
    },
  });

  const loginUser = useMutation({
    mutationFn: async ({ email, password }: AuthenticateUserInput) => {
      const { data } = await ApiConfig.post("/login", {
        email,
        password,
      });

      ApiConfig.defaults.headers["Authorization"] = `Bearer ${data.token}`;

      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
      });
    },
    onError(error) {
      return getErrorResponse(error);
    },
  });

  function signUp({ name, email, password }: CreateUserInput) {
    setLoadAuth(true);
    createUser.mutate({ name, email, password });
    setLoadAuth(false);
    navigation.goBack();
  }

  function signIn({ email, password }: AuthenticateUserInput) {
    setLoadAuth(true);
    loginUser.mutate({ email, password });
    setLoadAuth(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, loadingAuth: loadAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
