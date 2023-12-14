import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="w-full h-screen flex justify-items-center">{children}</main>;
}
