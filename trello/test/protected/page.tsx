"use client";
import { UserButton, auth, useUser } from "@clerk/nextjs";

import { useAuth } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { user } = useUser();
  const { userId } = useAuth();

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;
