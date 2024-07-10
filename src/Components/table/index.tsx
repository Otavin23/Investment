import { useRef, useEffect, useContext } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { DataMediaContext } from "@/context/DataMedia";

const TableInvestment = () => {
  const { data } = useContext(DataMediaContext);

  const wrapperRef = useRef<any>(null);

  const grid = new Grid({
    columns: [
      "Valor investimento",
      "Rendimento mensal",
      "Total",
      "Rendimento anual",
    ],
    data: [
      ["John", "john@example.com", "(353) 01 222 3333", "a"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444", "a"],
    ],
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

  return <div ref={wrapperRef} />;
};

export { TableInvestment };
