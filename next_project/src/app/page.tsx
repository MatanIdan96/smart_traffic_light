"use client";

import { useUser } from "@/context/UserProvider";

const Home = () => {
  const { user } = useUser();
  const { username } = user;

  return (
    <>
      <h1>Home Page</h1>
      <p>hi {username}</p>
    </>
  );
};

export default Home;
