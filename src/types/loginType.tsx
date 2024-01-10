import { ReactNode } from "react";

export type ProtectedRouteProps = {
  user?: number;
  isLogin: boolean;
  children: ReactNode;
}
