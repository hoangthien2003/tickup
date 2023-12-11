import { Button } from "@/shared/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomeLoginButton from "./components/HomeLoginButton";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <h1 className="mr-5">Tickup Page</h1>
      <HomeLoginButton />
    </main>
  );
}
