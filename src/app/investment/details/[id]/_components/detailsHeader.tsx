import { BarChart, Table } from "lucide-react";
import React from "react";

interface IProps {
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

const DetailsHeader = ({ select, setSelect }: IProps) => {
  return (
    <header className="flex flex-col justify-between items-center tabletmd:flex-row">
      <h1 className="font-medium text-primary max-w-[600px] text-title-md2 text-center xsm:text-normal">
        Informações de investimento
      </h1>

      <div className="flex flex-col items-center xsm:flex-row">
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
  );
};

export { DetailsHeader };
