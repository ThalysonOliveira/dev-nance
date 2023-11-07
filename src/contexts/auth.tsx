import { ReactNode, createContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesProps } from "../routes/auth.routes";
import { ApiConfig, getErrorResponse } from "../services";

export type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextProps = {
  user: User;
  signUp: (userInput: User) => void;
  loadingAuth: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loadAuth, setLoadAuth] = useState<boolean>(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthRoutesProps>>();

  const createUser = useMutation({
    mutationFn: async ({ name, email, password }: User) => {
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

  function signUp({ name, email, password }: User) {
    createUser.mutate({ name, email, password });
    setLoadAuth(createUser.isLoading);
    navigation.goBack();
  }

  return (
    <AuthContext.Provider value={{ user, signUp, loadingAuth: loadAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
