"use client";

import { OrganizationList, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">Dashboard Page</h1>
      <p className="text-base">
        {JSON.stringify({ email: user?.emailAddresses, fullName: user?.fullName })}
      </p>
      <img src={user?.imageUrl} alt="User avatar" height={128} width={128} />
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/w/:id"
        afterCreateOrganizationUrl="/w/:id"
      />
    </div>
  );
}
