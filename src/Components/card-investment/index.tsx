import { DataMediaContext } from "@/context/DataMedia";
import Link from "next/link";
import { useContext } from "react";

interface IProps {
  owner: string;
  value: number;
  date: Date;
}

const CardInvestment = ({ owner, value, date }: IProps) => {
  const { calculateFutureValue } = useContext(DataMediaContext);

  return (
    <div
      data-testid="card-investment"
      className="bg-[#ffffff] border-[1px] border-[rgba(29, 29, 29, 0.04)] rounded-lg p-4.5 shadow-[_7px_7px_0_#279effb2]"
    >
      <div className="flex justify-between items-center pb-3.5 border-b-[1px] border-b-[rgba(29, 29, 29, 0.04)]">
        <h3 className="font-medium">{owner}</h3>
        <Link
          href={`/investment/details/${owner.replaceAll(/\s+/g, "")}`}
          className="ext-primary text-title-xsm1 font-bold cursor-pointer"
        >
          Details
        </Link>
      </div>
      <p className="flex items-center mt-4.5 font-medium text-title-md2 text-[#rgb(1, 188, 141)]">
        {value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p className="flex items-center font-medium text-title-xsm2 text-[#02BC8D]">
        +{calculateFutureValue(value, date).toFixed(2)}
        <svg
          width="8"
          height="6.67"
          viewBox="0 0 9 7"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.354.413c.038.038.204.18.34.313.855.776 2.255 2.803 2.682 3.863.069.161.214.568.224.786 0 .208-.048.407-.146.597a1.25 1.25 0 01-.602.53c-.176.067-.7.17-.71.17-.574.105-1.506.162-2.537.162-.982 0-1.877-.057-2.46-.143-.009-.01-.66-.113-.884-.227A1.19 1.19 0 01.6 5.413v-.038c.01-.284.263-.88.272-.88C1.3 3.49 2.632 1.51 3.516.714c0 0 .228-.223.37-.32.204-.153.456-.228.709-.228.282 0 .545.085.759.246z"></path>
        </svg>
      </p>
    </div>
  );
};

export default CardInvestment;
