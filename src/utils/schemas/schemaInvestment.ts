import { number, object, string } from "yup";

const InvestmentSchema = object({
  owner: string()
    .required("Este campo é obrigatório")
    .min(6, "deve ter  pelo menos 6 caracteres")
    .max(20, "maximo de 15 caracteres")
    .test({
      message: "Números ou caracteres especiais não são permitidos.",
      test: (value: any) => {
        const isNumbers = value.match(/[^a-zA-Z\s]/g);
        if (isNumbers) return;
        return value;
      },
    }),
  value: number()
    .required("Este campo é obrigatório")
    .min(1, "deve ter pelo menos 1 real"),
});

export { InvestmentSchema };
