import api from "@/services/api-back-end";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type AuthenticatedComponentProps = {
  children: ReactNode;
};

export default function AuthProvider(Component: React.FC<AuthenticatedComponentProps>) {
  async function AuthenticatedComponent(props: AuthenticatedComponentProps) {
    const auth = await api("http://localhost:3000/api/token", true);
    console.log(auth)
    if (auth.status === 0) redirect("/");

    return <Component {...props} />;
  }

  return AuthenticatedComponent;
}
