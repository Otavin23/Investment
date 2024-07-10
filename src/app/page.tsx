"use client";

import Modal from "@/Components/modal";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

export default function Home() {
  const [isOpen, setIsClose] = useState(false);

  return (
    <main className="my-6.5">
      <div className="container">
        <section className="flex items-center justify-between">
          <h1 className="font-medium text-primary text-title-lg">
            Criacao de investimento
          </h1>
          <Button variant="secondary" onClick={() => setIsClose(!isOpen)}>
            Criar investimento
          </Button>
          {isOpen && <Modal isClose={setIsClose} />}
        </section>
      </div>

      <Toaster />
    </main>
  );
}
