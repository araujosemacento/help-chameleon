/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Exercicios,
  TesteDeNivel,
  Desafios,
  Ranking,
  Perfil,
} from "@/components/userPages";
import Sidebar from "@/components/SideBar";
import React from "react";
import IsMobile from "@/components/isMobile";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/public/loading/loading";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [page, setPage] = React.useState("loading");

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user) {
          setPage("profile");
        } else {
          //router.push("/acesso");
        }
      } catch (error) {
        console.error("Erro ao buscar o perfil do usário:", error);
        //router.push("/acesso");
      }
    };

    fetchUser();
  }, [router, user]);

  const handleSelect = (index) => {
    setPage(index);
  };

  return (
    <div className="flex flex-row h-full">
      {page === "loading" && <Loading />}
        <Sidebar onSelect={handleSelect} />
      <main className="flex flex-row w-full h-full">
        {page === "exercises" && <Exercicios />}
        {page === "test" && <TesteDeNivel />}
        {page === "challenges" && <Desafios />}
        {page === "ranking" && <Ranking />}
        {page === "profile" && <Perfil />}
      </main>
    </div>
  );
}
