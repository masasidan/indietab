// It's all hard-coded for now

import CTA from "@/components/user/CTA";
import UserCard from "@/components/user/UserCard";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { IoIosClose } from "react-icons/io";

export const metadata: Metadata = {
  title: "Idan Masas - IndieTab",
  description: "Software Engineer and Indie Hacker ⚡️",
};

interface IUser {
  params: {
    username: string;
  };
}

const User = ({ params: { username } }: IUser) => {
  return (
    <main className="w-screen h-[100svh]">
      <div className="px-5 overflow-auto w-full h-full flex flex-col items-center justify-center">
        <UserCard username={username} />
        <CTA />
      </div>
    </main>
  );
};

export default User;
