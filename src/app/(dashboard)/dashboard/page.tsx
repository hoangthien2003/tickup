"use client";

import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  return (
    <div>
      <h1 className="text-3xl">Dashboard Page</h1>
      <p className="text-base">
        {JSON.stringify({ email: user?.emailAddresses, fullName: user?.fullName })}
      </p>
      <img src={user?.imageUrl} alt="User avatar" height={128} width={128} />
    </div>
  );
}
