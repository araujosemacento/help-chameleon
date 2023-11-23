/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  ChartBarIcon,
  BoltIcon,
  TrophyIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar({ onSelect }) {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const [selected, setSelected] = React.useState("profile");

  const handleSelectSidebar = (index) => {
    setSelected(index);
    onSelect(index);
  };

  return (
    <aside className="flex flex-col h-full w-full max-w-[25vw] p-4 shadow-xl rounded-r-2xl shadow-blue-gray-900/5 bg-background-200 text-text-800 relative">
      <div className="flex flex-row gap-4 w-full p-2">
        <img
          src="/hameleon.svg"
          alt="logo"
          className="w-[3vw] invert dark:invert-0"
        />
        <h3 className="place-self-center text-[1.5vw] text-text-900">
          Programação II
        </h3>
      </div>
      <hr className="my-2 border-accent-600" />
      <div className="flex flex-col w-full gap-6 mt-4">
        <Button
          onClick={() => handleSelectSidebar("exercises")}
          className="bg-transparent border border-transparent hover:border-background-100 items-center flex"
          style={
            selected === "exercises"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        >
          <DocumentTextIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Exercícios</p>
        </Button>
        <Button
          onClick={() => handleSelectSidebar("test")}
          className="bg-transparent border border-transparent hover:border-background-100 items-center flex"
          style={
            selected === "test"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        >
          <ChartBarIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Teste de Nível</p>
        </Button>
        <Button
          onClick={() => handleSelectSidebar("challenges")}
          className="bg-transparent border border-transparent hover:border-background-100 items-center flex"
          style={
            selected === "challenges"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        >
          <BoltIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Desafios</p>
        </Button>
        <Button
          onClick={() => handleSelectSidebar("ranking")}
          className="bg-transparent border border-transparent hover:border-background-100 items-center flex"
          style={
            selected === "ranking"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        >
          <TrophyIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Ranking</p>
        </Button>
        <Button
          onClick={() => handleSelectSidebar("profile")}
          className="bg-transparent border border-transparent hover:border-background-100 items-center flex"
          style={
            selected === "profile"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        >
          <UserIcon className="w-[2vw] mr-5 text-text-800" />
          <p className="text-[1vw] text-text-800">Perfil</p>
        </Button>
        <div className="flex flex-col w-full h-full justify-self-end">
          <Button
            onClick={() => {
              handleSelectSidebar("logout");
              handleSignOut();
            }}
            className="bg-transparent border border-transparent hover:border-background-100 items-center flex "
            style={
              selected === "logout"
                ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
                : {}
            }
          >
            <ArrowRightOnRectangleIcon className="w-[2vw] mr-5 text-text-800" />
            <p className="text-[1vw] text-text-800">Sair</p>
          </Button>
        </div>
      </div>
      {/* TODO: Aagar essa div aqui debaixo */}
      <div className="flex flex-row justify-between absolute bottom-4">
        <Button
          onClick={() => handleSelectSidebar("login")}
          className="bg-transparent border border-transparent hover:border-background-100"
          style={
            selected === "login"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        />
        <Button
          onClick={() => handleSelectSidebar("home")}
          className="bg-transparent border border-transparent hover:border-background-100"
          style={
            selected === "home"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        />
        <Button
          onClick={() => handleSelectSidebar("register")}
          className="bg-transparent border border-transparent hover:border-background-100"
          style={
            selected === "register"
              ? { boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)" }
              : {}
          }
        />
      </div>
    </aside>
  );
}
