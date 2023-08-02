"use client";
import { useState } from "react";
import { MenuItems } from "./";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <nav className="bg-tita-yellow border-gray-200 ">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="animate__animated animate__bounceIn animate__delay-1s w-full my-10">
          <Link href="/" className="flex items-center justify-center">
            <Image
              alt="Logo Tita Cochinita Sencillo"
              src="/img/solo-tita.png"
              className="my-3 h-auto w-auto animate-jump-in animate-once animate-delay-500 animate-ease-in-out"
              width="150"
              height="150"
            />
          </Link>
          <h1 className="text-center text-white drop-shadow-[0_-3px_1px_rgba(0,0,0,0.5)] font-lobster text-3xl">
            Cochinita de Barrio
          </h1>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          data-collapse-toggle="navbar-main-menu"
          type="button"
          className="animate__animated animate__bounce animate__delay-1s absolute top-8 right-8 inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-tita-dark text-tita-yellow rounded-lg sm:hidden"
          aria-controls="navbar-main-menu"
          aria-expanded={toggle ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-10 h-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {toggle && <MenuItems />}
      </div>
    </nav>
  );
};
