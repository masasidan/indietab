import { cutString } from "@/utils/helpers";
import Link from "next/link";
import React from "react";

interface IUserProject {
  name: string;
  description: string;
  url: string;
  active: boolean;
}

const UserProject: React.FC<IUserProject> = ({
  name,
  description,
  url,
  active,
}) => {
  return (
    <div className="min-w-[200px] flex-1 w-full flex flex-col justify-between gap-2 border border-gray-500 p-3 rounded-xl">
      <section>
        <div className="flex flex-row items-center gap-2">
          <h4 className="font-medium text-gray-400">{name}</h4>
          <div
            className={`rounded-full w-2 h-2 ${
              active ? "!bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>
        <p className="text-gray-500 text-sm text-left">
          {cutString(description, 80)}
        </p>
      </section>
      <section className="text-left">
        <Link
          target="_blank"
          href={url}
          className="text-red-500 text-xs w-fit hover:underline"
        >
          {url}
        </Link>
      </section>
    </div>
  );
};

export default UserProject;
