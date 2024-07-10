"use client";

import React, { useState } from "react";

import { Input } from "@/Components/ui/input";
import { Button } from "../ui/button";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Data } from "@/utils/data";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

import { CurrencyInput } from "react-currency-mask";
import { InvestmentSchema } from "@/utils/schemas/schemaInvestment";
import { Calender } from "./_components/calender";

interface IProps {
  isClose: (arg: boolean) => void;
}

interface IForm {
  owner: string;
  date?: Date;
  value: number | 0;
}

const Modal = ({ isClose }: IProps) => {
  const [date, setDate] = useState<any>(new Date());

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(InvestmentSchema),
  });

  const handleSubmitForm: SubmitHandler<IForm> = (form) => {
    const findInvestment = Data.find(
      (investment) => investment.owner === form.owner
    );

    if (findInvestment) {
      return toast.error("Investimento já existente!");
    }

    const investmentForm: IForm = {
      ...form,
      date,
    };

    Data.push(investmentForm);

    Cookies.set("data-investments", JSON.stringify(Data));

    toast.success("Investimento criado com sucesso!");
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
      <div
        onClick={() => isClose(false)}
        className="fixed inset-0 transition-opacity"
      >
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-w-[450px] w-full"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Crie um investimento
          </h3>

          <div className="mt-4.5 mb-3.5">
            <label className="text-title-xsm1">Proprietario</label>
            <Input
              className="bg-transparent mt-1.5"
              type="text"
              placeholder="Nome de um proprietario"
              {...register("owner")}
            />
            <span className="font-normal text-[#fc3535] text-[14px] mt-1.5">
              {errors.owner?.message}
            </span>
          </div>

          <Calender date={date} setDate={setDate} />

          <div className="mt-3.5">
            <label className="text-title-xsm1">Valor inicial</label>
            <CurrencyInput
              onChangeValue={(event, originalValue: any, maskedValue) => {
                setValue("value", originalValue);
              }}
              InputElement={
                <Input
                  className="bg-transparent mt-2.5 mt-1.5 "
                  type="text"
                  placeholder="valor incial"
                  style={{
                    boxShadow: "none",
                  }}
                />
              }
            />
            <span className="font-normal text-[#fc3535] text-[14px] mt-1.5">
              {errors.value?.message}
            </span>
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
            Criar investimento
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
