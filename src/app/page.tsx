"use client";

import { useState } from "react";

import { Button } from "@/Components/ui/button";
import Modal from "@/Components/modal";
import CardInvestment from "@/Components/card-investment";

import { Toaster } from "react-hot-toast";
import { IInvestment } from "@/@types/data";
import { useFetch } from "@/hook/useFetcher";

import { trio } from "ldrs";

trio.register();

export default function Home() {
  const [isOpen, setIsClose] = useState(false);
  const { data, isLoading } = useFetch<IInvestment[]>("/investments");

  return (
    <main className="my-6.5">
      <div className="container">
        <section className="flex flex-col items-start justify-between xsm:flex-row xsm:items-center pb-4.5 border-b-[1px] border-b-[rgba(29, 29, 29, 0.04)]">
          <h1 className="font-medium text-primary text-title-lg">
            Criação de investimento
          </h1>
          <Button
            variant="ghost"
            className="bg-bgPrimary text-white"
            onClick={() => setIsClose(!isOpen)}
          >
            Criar investimento
          </Button>
          {isOpen && <Modal isClose={setIsClose} />}
        </section>
        <section>
          {isLoading ? (
            <div className="flex justify-center mt-10.5">
              <l-trio size="40" speed="1.3" color="#2659ff"></l-trio>
            </div>
          ) : !data?.length ? (
            <span>Não tem investimentos</span>
          ) : (
            <div className="grid grid-cols-1 gap-4 mt-10.5  xsm:grid-cols-2 tabletmd:grid-cols-3 desktop:grid-cols-4">
              {data?.map((investment: IInvestment) => (
                <CardInvestment
                  key={investment.id}
                  date={investment.date}
                  owner={investment.owner}
                  value={investment.value}
                  id={investment.id}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <Toaster />
    </main>
  );
}
