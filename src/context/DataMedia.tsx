import { IData } from "@/@types/data";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface IContext {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<any>>;
  calculateFutureValue: (value: number, data: Date) => number;
}

interface IIvestment {
  owner: string;
  date: Date;
  value: number | 0;
}

interface IProps {
  children: JSX.Element;
}

export const DataMediaContext = createContext<IContext>({} as IContext);

function DataMediaProvider({ children }: IProps) {
  const [data, setData] = useState<IIvestment[]>([]);

  useEffect(() => {
    if (data.length <= 0) {
      const cookieData = JSON.parse(Cookies.get("data-investments") || "[]");
      setData(cookieData);
    }
  }, [data.length]);

  const calculateFutureValue = (intialValue: number, creationDate: Date) => {
    const monthlyYieldRate = 0.52;
    const startDate = new Date(creationDate);

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    let futureValue = intialValue * Math.pow(1 + monthlyYieldRate, 1);

    return futureValue;
  };

  const valor = {
    data,
    setData,
    calculateFutureValue,
  };

  return (
    <DataMediaContext.Provider value={valor}>
      {children}
    </DataMediaContext.Provider>
  );
}

export { DataMediaProvider };
