"use client";
import { DbCtxProps, DbUserProps } from "@/types";
import { createContext, useState } from "react";

export const DbCtx = createContext<DbCtxProps>({
  dbUser: null,
  setDbUser: () => {},
});

interface DbProviderProps {
  children: React.ReactNode;
}
export default function DbProvider({ children }: DbProviderProps) {
  const [dbUser, setDbUser] = useState<DbUserProps | null>(null);
  return (
    <DbCtx.Provider value={{ dbUser, setDbUser }}>{children}</DbCtx.Provider>
  );
}
