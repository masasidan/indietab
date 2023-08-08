import { cutString } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

const UserProject: React.FC = () => {
  const active = true;

  return (
    <div className="min-w-[200px] flex-1 w-full flex flex-col gap-2 border border-gray-500 p-3 rounded-xl">
      <div className="flex flex-row items-center gap-2">
        <h4 className="font-medium text-gray-400">VoteSnag</h4>
        <div
          className={`rounded-full w-2 h-2 ${
            active ? "!bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>
      <p className="text-gray-500 text-sm text-left">
        {cutString(
          "VoteSnag helps you create better products. Gather, prioritize, analyze and manage user feedback - all in one place.",
          95
        )}
      </p>
      <Link
        target="_blank"
        href={"https://votesnag.com"}
        className="text-red-500 text-xs w-fit hover:underline"
      >
        https://votesnag.com
      </Link>
    </div>
  );
};

export default UserProject;
