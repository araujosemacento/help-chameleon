/* eslint-disable @next/next/no-img-element */
"use client";
import { useMobile } from "@/context/MobileContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
//import SideBar from "@/components/SideBar";
import React, { useState, useEffect } from "react";

export default function Acessar() {
  const { isMobile, windowSize } = useMobile();
  const { user } = useAuth();
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
    } else {
      router.push("/");
    }
  }, [router, user]);

  return (
    <div className="flex w-full h-full text-text-900">
      {loading ? <img className="m-auto" src="gear.svg" alt="loading" /> : <p className="m-auto">Você está fora da aplicação</p>}
    </div>
  );
}