import { Button } from "@/Components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/Components/ui/calendar";
import { format } from "date-fns";

interface IProps {
  date: Date;
  setDate: any;
}

const Calender = ({ date, setDate }: IProps) => {
  return (
    <Popover>
      <label className="text-title-xsm1">Data criação</label>
      <PopoverTrigger asChild className="mt-1.5">
        <Button
          variant={"default"}
          className="w-full border-[1px] border-[#E5E5E5]"
        >
          <CalendarIcon className="mr-2 h-4 w-4 " />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0 border-none">
        <Calendar
          className="bg-[#eeeeee] rounded-md text-black"
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { Calender };
