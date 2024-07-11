"use client";

import { GraphLine } from "@/Components/graph";
import { TableInvestment } from "@/Components/table";
import { DataMediaContext } from "@/context/DataMedia";
import { useContext, useState } from "react";
import { useFetch } from "@/hook/useFetcher";
import { IInvestment } from "@/@types/data";
import { DetailsHeader } from "./_components/detailsHeader";
import { InformationUser } from "./_components/informationUser";

interface IProps {
  params: {
    id: string;
  };
}

const MyPage = ({ params: { id } }: IProps) => {
  const [select, setSelect] = useState("graph");
  const { data: investment, isLoading } = useFetch<IInvestment>(
    `/investments/${id}`
  );
  const { calculateFutureValue } = useContext(DataMediaContext);

  return (
    <main className="my-6.5">
      <div className="container">
        {isLoading ? (
          <div className="flex justify-center mt-10.5">
            <l-trio size="40" speed="1.3" color="#2659ff"></l-trio>
          </div>
        ) : (
          <div className="flex flex-col">
            <DetailsHeader select={select} setSelect={setSelect} />

            <InformationUser
              date={investment?.date}
              owner={investment?.owner}
              value={investment?.value}
              id={investment?.id}
            />

            {select === "graph" ? (
              <GraphLine />
            ) : (
              <TableInvestment
                incomeMonthly={calculateFutureValue(
                  investment?.value,
                  investment?.date
                ).toFixed(2)}
                owner={investment?.owner}
                value={investment?.value}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPage;
