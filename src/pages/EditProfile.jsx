import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const PatientProfile = () => {
  const [date, setDate] = useState();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="m-5">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: "32px"
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center">
          Edit Profile
        </h1>
      </div>

      <div className="flex flex-col items-center my-3 gap-3 ml-7">
        <img src="/images/user.png" alt="" />
        <h1 className="font-bold text-center lg:text-2xl">Ahmad</h1>
      </div>

      <div className="md:mx-5">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-3 md:w-[460px]">
            <div className="flex flex-col gap-3 ">
              <Label className="font-semibold mb-1">Name</Label>
              <Input tye="text" placeholder="Ahmad Hamad" required />
            </div>
            <div className="flex flex-col gap-3 ">
              <Label className="font-semibold mb-1">Phone</Label>
              <Input type="number" placeholder="123 456 789 0" required />
            </div>

            <div className=" flex flex-col gap-3">
              <Label className="font-semibold mb-1">Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      " justify-between text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className="text-gray-400">Select Date</span>
                    )}
                    <CalendarIcon className=" h-4 w-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col gap-3 ">
              <Label className="font-semibold mb-1">Email</Label>
              <Input tye="email" placeholder="Input Value" required />
            </div>

            <div className="flex flex-col gap-3 ">
              <Label className="font-semibold mb-1">Disease</Label>
              <Select>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="othre">Other </SelectItem>
                  <SelectItem value="aids">AIDS </SelectItem>
                  <SelectItem value="brodetella">Brodetella </SelectItem>
                  <SelectItem value="campylobacteriosis">
                    Campylobacteriosis
                  </SelectItem>
                  <SelectItem value="dengue">Dengue </SelectItem>
                  <SelectItem value="EbolaVirusDisease">
                    Ebola virus disease
                  </SelectItem>
                  <SelectItem value="flu">Flu </SelectItem>
                  <SelectItem value="germanMeasles">German measles </SelectItem>
                  <SelectItem value="haemophilusInfection">
                    Haemophilus infection
                  </SelectItem>
                  <SelectItem value="hepatitis">Hepatitis </SelectItem>
                  <SelectItem value="influenza">Influenza </SelectItem>
                  <SelectItem value="malaria">Malaria </SelectItem>
                  <SelectItem value="Measles">Measles </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex lg:justify-start justify-center gap-1 mt-5">
            <input
              type="reset"
              value="CANCEL"
              className="bg-transparent text-black font-semibold rounded-md border border-blue-700 text-lg w-[180px] hover:bg-blue-700 hover:text-white hover:border-transparent"
            />


            <Button
              type="submit"
              className="bg-custom-blue py-7 w-[180px] hover:opacity-90 ml-3 text-lg"
            >
              UPDATE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientProfile;
