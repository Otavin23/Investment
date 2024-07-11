interface IInvestment {
  id: string | undefined;
  owner: string | undefined;
  date: Date | undefined;
  value: number | 0 | any | undefined;
}

export type { IInvestment };
