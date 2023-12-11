"use client";

import { Button } from "@/shared/components/button";
import { useRouter } from "next/navigation";

export default function HomeLoginButton() {
  const router = useRouter();
  const navigateToLogin = () => {
    router.push("/login");
  };
  return <Button onClick={navigateToLogin}>Đăng nhập</Button>;
}
