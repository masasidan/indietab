import CTA from "@/components/user/CTA";
import UserCard from "@/components/user/UserCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Idan Masas - IndieTab",
  description: "Software Engineer and Indie Hacker ⚡️",
  openGraph: {
    images: ["/static/idan.jpg"],
  },
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
        <UserCard
          username={username}
          pfp="/static/idan.jpg"
          fullName="Idan Masas"
          bio="Software Engineer and Indie Hacker ⚡️"
          countryName="Israel"
          countryCode="IL"
          projects={[
            {
              name: "VoteSnag",
              description:
                "VoteSnag helps you create better products. Gather, prioritize, analyze and manage user feedback - all in one place.",
              url: "https://votesnag.com",
              active: true,
            },
            {
              name: "SkinScout",
              description:
                "SkinScout was a user-friendly platform for trading CS:GO skins with ease. It boasted real-time tracking, advanced search, and automation tools, all designed to optimize profits and minimize errors for its users.",
              url: "https://skinscout.gg",
              active: false,
            },
            {
              name: "Mailchest",
              description:
                "Mailchest was a robust tool designed to streamline your marketing strategy. It simplified the process of capturing emails, viewing user data, and customizing forms, all within a few clicks.",
              url: "https://mailchest.app",
              active: false,
            },
            {
              name: "SuperSocial",
              description:
                "SuperSocial was a powerful and automatic way to reach your target audience within seconds. Find people who care about your product, and get more followers on social media. I came up with the idea for SuperSocial after I saw how many people were struggling to grow their social media accounts.",
              url: "https://supersocial.app",
              active: false,
            },
          ]}
          socials={[
            {
              name: "x",
              url: "https://twitter.com/intent/follow?screen_name=idanmasas",
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/idanmasas/",
            },
            {
              name: "github",
              url: "https://github.com/masasidan",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/in/idanmasas/",
            },
          ]}
        />
        <CTA />
      </div>
    </main>
  );
};

export default User;
