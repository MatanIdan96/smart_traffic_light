"use client";

import Button from "@/components/core/button";

const Page = () => {
  const handleSignIn = () => {
    console.log("signed in");
  };

  return (
    <div className="h-full w-full">
      <h1>Sign In</h1>
      <Button onClick={handleSignIn} size="large" label="Sign In" />
    </div>
  );
};

export default Page;
