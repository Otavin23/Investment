import { createContext, useEffect, useState } from "react";

interface IContext {
  calculateFutureValue: (value: number, data: Date | undefined) => number;
}

interface IProps {
  children: JSX.Element;
}

export const DataMediaContext = createContext<IContext>({} as IContext);

function DataMediaProvider({ children }: IProps) {
  const calculateFutureValue = (intialValue: number, creationDate: Date) => {
    const monthlyYieldRate = 0.52;
    const startDate = new Date(creationDate);

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    let futureValue = intialValue * Math.pow(1 + monthlyYieldRate, 1);

    return futureValue;
  };

  const valor = {
    calculateFutureValue,
  };

  return (
    <DataMediaContext.Provider value={valor}>
      {children}
    </DataMediaContext.Provider>
  );
}

export { DataMediaProvider };
