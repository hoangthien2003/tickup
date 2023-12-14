"use client";
import { OrganizationProfile, useAuth } from "@clerk/nextjs";
import React from "react";

const WorkspacePage: React.FC = (props) => {
  const { userId } = useAuth();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-5">Workspace Page</h1>
      <p className="mb-8">UserID: {userId}</p>
      <OrganizationProfile />
    </div>
  );
};

export default WorkspacePage;
