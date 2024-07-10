interface IFormCreateInvestment {
  register: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const FormCreateInvestment: IFormCreateInvestment[] = [
  {
    label: "Proprietario*",
    placeholder: "Proprietario",
    register: "proprietario",
    type: "text",
    name: "proprietario",
  },
  {
    label: "Data*",
    placeholder: "Proprietario",
    register: "proprietario",
    type: "text",
    name: "proprietario",
  },
  {
    label: "Valor inicial*",
    placeholder: "value",
    register: "valor",
    type: "text",
    name: "valor",
  },
];
