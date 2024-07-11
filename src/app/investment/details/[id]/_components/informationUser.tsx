import { useContext } from "react";
import { IInvestment } from "@/@types/data";
import { DataMediaContext } from "@/context/DataMedia";
import { TrendingUp } from "lucide-react";

const InformationUser = ({ date, owner, value }: IInvestment) => {
  const { calculateFutureValue } = useContext(DataMediaContext);

  return (
    <section className="mt-10.5 mb-4.5">
      <div>
        <h2 className="flex flex-col text-title-lg font-medium">{owner}</h2>
        <div className="flex items-start my-1.5">
          <h3 className="text-title-sm font-medium text-secondary">
            Saldo:
            <span className="text-black font-medium ml-1.5">
              {value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </h3>
          <p className="flex items-center font-medium text-title-xsm2 text-[#02BC8D] ml-2.5">
            <TrendingUp
              width={30}
              height={30}
              style={{
                marginRight: "0.3rem",
              }}
            />

            {calculateFutureValue(value, date).toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
};

export { InformationUser };
