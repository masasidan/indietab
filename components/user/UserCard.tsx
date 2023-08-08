"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import UserProject from "./UserProject";

interface IUserCard {
  username: string;
}

const UserCard: React.FC<IUserCard> = ({ username }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef: any = useRef<HTMLDivElement>(null);
  const rightArrowButtonRef: any = useRef<HTMLButtonElement>(null);
  const leftArrowButtonRef: any = useRef<HTMLButtonElement>(null);

  let isCardHovered = false;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cardRef.current && !isCardHovered) {
        const rect = cardRef.current.getBoundingClientRect();
        const dx = (event.clientX - rect.left) / rect.width - 0.5;
        const dy = (event.clientY - rect.top) / rect.height - 0.5;
        let xOffset = dx * 30;
        let yOffset = dy * -30;
        xOffset = Math.max(Math.min(xOffset, 15), -15);
        yOffset = Math.max(Math.min(yOffset, 15), -15);
        cardRef.current.style.transition = "transform 0.3s";
        cardRef.current.style.transform = `perspective(1000px) rotateY(${xOffset}deg) rotateX(${yOffset}deg)`;
      }
    };

    const handleMouseEnter = () => {
      isCardHovered = true;
      if (cardRef.current) {
        cardRef.current.style.transition = "transform 0.3s";
        cardRef.current.style.transform = "";
      }
    };

    const handleMouseLeave = () => {
      isCardHovered = false;
      if (cardRef.current) {
        cardRef.current.style.transition = "transform 0.3s";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    if (cardRef.current) {
      cardRef.current.addEventListener("mouseenter", handleMouseEnter);
      cardRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (cardRef.current) {
        cardRef.current.removeEventListener("mouseenter", handleMouseEnter);
        cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const projectsContainer = projectsContainerRef.current;
    if (projectsContainer) {
      projectsContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (projectsContainer) {
        projectsContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    if (
      projectsContainerRef.current &&
      rightArrowButtonRef.current &&
      leftArrowButtonRef.current
    ) {
      const projectsContainer = projectsContainerRef.current;
      if (
        projectsContainer.scrollWidth - projectsContainer.scrollLeft >
        projectsContainer.clientWidth
      ) {
        rightArrowButtonRef.current.style.opacity = "1";
        rightArrowButtonRef.current.style.visibility = "visible";
      } else {
        rightArrowButtonRef.current.style.opacity = "0";
        rightArrowButtonRef.current.style.visibility = "hidden";
      }

      if (projectsContainer.scrollLeft > 0) {
        leftArrowButtonRef.current.style.opacity = "1";
        leftArrowButtonRef.current.style.visibility = "visible";
      } else {
        leftArrowButtonRef.current.style.opacity = "0";
        leftArrowButtonRef.current.style.visibility = "hidden";
      }
    }
  };

  const scrollProjects = (direction: "left" | "right") => {
    if (projectsContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = projectsContainerRef.current.scrollLeft;
      let newScroll: any;

      if (direction === "right") {
        newScroll = currentScroll + scrollAmount;
      } else {
        newScroll = currentScroll - scrollAmount;
      }

      const startTime = performance.now();
      const duration = 300; // duration of the animation in milliseconds

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        projectsContainerRef.current!.scrollLeft =
          currentScroll + progress * (newScroll - currentScroll);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div
      ref={cardRef}
      className="my-5 flex flex-col border border-gray-500 shadow-md rounded-xl overflow-auto max-w-[400px] mx-auto w-full relative"
    >
      <section
        data-username={`@${username} `.repeat(20)}
        className="p-14 relative bg-red-500/20 skew-bg"
      ></section>
      <section className="bg-[#121212] p-5 flex flex-col items-center text-center justify-center">
        <div className="relative -top-16 mb-[-3.5rem]">
          <img
            className="w-32 h-32 rounded-full border-8 border-[#121212] pointer-events-none select-none"
            alt="pfp"
            src="https://pbs.twimg.com/profile_images/1686355879937896448/BIjP9i_g_400x400.jpg"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-white">Idan Masas</h1>

          <h2 className="text-gray-500 text-lg max-w-[200px]">
            Software Engineer and Indie Hacker ⚡️
          </h2>
        </div>
        <div className="my-4 flex flex-row items-center gap-3">
          <Link
            className="transition-colors duration-150 text-gray-500 hover:text-sky-500"
            target="_blank"
            href="https://twitter.com/intent/follow?screen_name=idanmasas"
          >
            <svg
              viewBox="0 0 300 300"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-150 w-4 h-4 fill-gray-500 hover:fill-white"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
            </svg>
          </Link>
          <Link
            className="transition-colors duration-150 text-gray-500 hover:text-red-500"
            target="_blank"
            href="https://www.instagram.com/idanmasas/"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            className="transition-colors duration-150 text-gray-500 hover:text-violet-500"
            target="_blank"
            href="https://github.com/masasidan"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            className="transition-colors duration-150 text-gray-500 hover:text-blue-500"
            target="_blank"
            href="https://www.linkedin.com/in/idanmasas/"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </div>

        <h3 className="text-gray-500 text-lg my-3">Projects</h3>
        <div className="flex flex-row gap-4 w-full mb-3">
          <button
            ref={leftArrowButtonRef}
            style={{
              opacity: "0",
              visibility: "hidden",
              transition: "opacity 0.3s",
            }}
            onClick={() => scrollProjects("left")}
            className="flex-1 border border-gray-500 rounded-full my-auto flex flex-row items-center gap-1 transition-colors duration-150 text-gray-500 hover:text-gray-400 hover:border-gray-400"
          >
            <BsArrowLeftShort className="w-5 h-5" />
          </button>

          <div
            ref={projectsContainerRef}
            className="flex flex-row items-center gap-2 overflow-auto scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            <UserProject />
            <UserProject />
            <UserProject />
          </div>

          <button
            ref={rightArrowButtonRef}
            style={{ opacity: "1", transition: "opacity 0.3s" }}
            onClick={() => scrollProjects("right")}
            className="flex-1 border border-gray-500 rounded-full my-auto flex flex-row items-center gap-1 transition-colors duration-150 text-gray-500 hover:text-gray-400 hover:border-gray-400"
          >
            <BsArrowRightShort className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5">
          <p className="text-gray-500 text-sm">
            Idan is indie hacking all the way from{" "}
            <span className="ml-1">
              <ReactCountryFlag countryCode="IL" svg className="text-lg" />{" "}
              Israel
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserCard;
