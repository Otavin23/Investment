import { useRef, useEffect, useContext } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { DataMediaContext } from "@/context/DataMedia";

interface IProps {
  owner: string;
  incomeMonthly: string;
  value: number;
}

const TableInvestment = ({ value, incomeMonthly, owner }: IProps) => {
  const { data } = useContext(DataMediaContext);

  const wrapperRef = useRef<any>(null);

  const grid = new Grid({
    columns: ["Proprietário do investimento", "Rendimento mensal", "Total"],
    data: [
      [owner, `R$ ${incomeMonthly}`, `R$ ${value + Number(incomeMonthly)}`],
    ],
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

  return <div ref={wrapperRef} />;
};

export { TableInvestment };
