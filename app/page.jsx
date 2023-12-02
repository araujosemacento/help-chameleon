/* eslint-disable @next/next/no-img-element */
"use client";
import { useMobile } from "@/context/MobileContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SideBar from "@/components/SideBar";
import {
  Exercicios,
  Nivel,
  Desafios,
  Ranking,
  Perfil,
  Refazer,
} from "@/components/userPages";
import React, { useState, useEffect } from "react";

export default function Home() {
  const { isMobile, windowSize } = useMobile();
  const { user } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState([]);

  const handleSelectPage = (page) => {
    setPage(localStorage.setItem("paginaPrincipal" , page));
  };

  useEffect(() => {
    if (user) {
      //console.log(user);
      setPage(localStorage.getItem("paginaPrincipal"));
      setLoading(false);
    } else {
      router.push("/login");
    }
  }, [router, user, page]);

  return (
    <div className="flex w-full h-full text-text-900">
      {loading ? (
        <img className="m-auto" src="gear.svg" alt="loading" />
      ) : (
        <div className="flex flex-col-reverse md:flex-row w-full h-full text-text-900">
          <SideBar onSelectPage={handleSelectPage} />
          {page === "exercicios" && <Exercicios className="w-3/4" />}
          {page === "nivel" && (
            <Nivel redirect={handleSelectPage} className="w-3/4" />
          )}
          {page === "desafios" && <Desafios className="w-3/4" />}
          {page === "ranking" && <Ranking className="w-3/4" />}
          {page === "perfil" && <Perfil className="w-3/4" />}
          {page === "refazer" && (
            <Refazer redirect={handleSelectPage} className="w-3/4" />
          )}
        </div>
      )}
    </div>
  );
}
