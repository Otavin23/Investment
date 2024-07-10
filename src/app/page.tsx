"use client";

import Modal from "@/Components/modal";
import { Button } from "@/Components/ui/button";
import { useContext, useState } from "react";
import CardInvestment from "@/Components/card-investment";
import { DataMediaContext } from "@/context/DataMedia";

interface IIvestment {
  owner: string;
  date: Date;
  value: number;
}

export default function Home() {
  const [isOpen, setIsClose] = useState(false);
  const { data, setData } = useContext(DataMediaContext);

  return (
    <main className="my-6.5">
      <div className="container">
        <section className="flex items-center justify-between border-b-[1px] border-b-[rgba(29, 29, 29, 0.04)]">
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
          {isOpen && (
            <Modal isClose={setIsClose} setData={setData} Data={data} />
          )}
        </section>

        <section className="">
          <div className="grid grid-cols-4 gap-4 mt-10.5">
            {data.length <= 0 ? (
              <h1>Adicione um investimento</h1>
            ) : (
              data.map(
                (investment: IIvestment, index): JSX.Element => (
                  <>
                    <CardInvestment
                      key={index}
                      date={investment.date}
                      owner={investment.owner}
                      value={investment.value}
                    />
                  </>
                )
              )
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
