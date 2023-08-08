// It's all hard-coded for now

import UserCard from "@/components/user/UserCard";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Idan Masas - IndieCard",
};

const User = () => {
  return (
    <main className="w-screen h-[100svh]">
      <div className="px-5 overflow-auto w-full h-full flex flex-col items-center justify-center">
        <UserCard />
        <div className="mt-24 mb-5 hidden lg:block">
          <p className="text-gray-500 text-sm">
            Want an indie card of your own?{" "}
            <Link href="" className="text-red-500 font-medium hover:underline">
              Create one now
            </Link>
            !
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 absolute bottom-3 rounded-xl right-0 left-0 w-[95%] mx-auto p-6 bg-red-500/40 backdrop-blur-[3px] lg:hidden">
          <p className="text-white text-lg text-center">
            Want an indie card of your own?
          </p>
          <Link
            href=""
            className="text-center bg-red-500 rounded-full py-2 px-4 text-lg text-white font-medium shadow-md"
          >
            Create one now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default User;
