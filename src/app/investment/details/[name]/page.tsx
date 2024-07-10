"use client";

import { GraphLine } from "@/Components/graph";
import { TableInvestment } from "@/Components/table";
import { DataMediaContext } from "@/context/DataMedia";
import { BarChart, Table } from "lucide-react";
import { useContext, useState } from "react";
import { TrendingUp } from "lucide-react";

interface IProps {
  params: {
    name: string;
  };
}

const MyPage = ({ params: { name } }: IProps) => {
  const [select, setSelect] = useState("graph");

  const { calculateFutureValue } = useContext(DataMediaContext);

  const { data } = useContext(DataMediaContext);

  const find = data.filter(
    (investment) => investment.owner.toLowerCase() === name.toLocaleLowerCase()
  );

  return (
    <main className="my-6.5">
      <div className="container">
        {find.length <= 0 ? (
          <h1>carregando</h1>
        ) : (
          find.map((investment) => (
            <>
              <header className="flex justify-between items-center ">
                <h1 className="font-medium text-primary max-w-[600px] text-title-md2 ">
                  Informações de investimento
                </h1>
                <div className="flex items-center">
                  <span
                    className="mr-4.5 text-secondary font-medium underline decoration-1
"
                  >
                    Historico de retirada
                  </span>
                  <div className="border-[1px] border-[rgba(29, 29, 29, 0.08)] rounded-md">
                    <button
                      style={{
                        background: `${select === "graph" ? "#24242411" : "transparent"}`,
                      }}
                      onClick={() => setSelect("graph")}
                      className="p-1.5 px-2.5 border-r-[1px] border-r-[rgba(29, 29, 29, 0.08)]"
                    >
                      <BarChart color="#535353" />
                    </button>

                    <button
                      style={{
                        background: `${select === "table" ? "#24242411" : "transparent"}`,
                      }}
                      onClick={() => setSelect("table")}
                      className="p-1.5 px-2.5 "
                    >
                      <Table color="#535353" />
                    </button>
                  </div>
                </div>
              </header>

              <section className="mt-10.5 mb-4.5">
                <div>
                  <h2 className="text-title-lg font-medium">
                    {investment.owner}
                  </h2>
                  <div className="flex items-start my-1.5">
                    <h3 className="text-title-sm font-medium text-secondary">
                      Saldo:
                      <span className="text-black font-medium ml-1.5">
                        {investment.value.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </h3>
                    <p className="flex items-center font-medium text-title-xsm2 text-[#02BC8D] ml-2.5">
                      <TrendingUp
                        width={30}
                        height={30}
                        style={{
                          marginRight: "0.3rem",
                        }}
                      />

                      {calculateFutureValue(investment.value, investment.date)}
                    </p>
                  </div>
                </div>
              </section>
            </>
          ))
        )}

        {select === "graph" ? <GraphLine /> : <TableInvestment />}
      </div>
    </main>
  );
};

export default MyPage;
