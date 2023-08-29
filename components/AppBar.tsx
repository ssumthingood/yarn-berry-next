"use client";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";

const AppBar = () => {
  const { data: session } = useSession();
  useEffect(()=>{
    if(!session) return;
    console.log(session);
  },[session])

  return (
    <div>
      <Link href={"/"}>
        Home
      </Link>
      <div>
        {session?.user ? (
          <>
            <img
              src={session.user.image || ""}
            />
            <p> {session.user.name}</p>
            <button onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={() => signIn("naver")}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;