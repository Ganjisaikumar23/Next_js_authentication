import React from "react";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const LandingPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("api/auth/signin");
  }

  return (
    <>
      <div> LandingPage</div>
      <Link href="/api/auth/signout">
        <button>LogOut </button>
      </Link>
    </>
  );
};

export default LandingPage;
