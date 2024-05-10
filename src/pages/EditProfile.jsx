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
    <div className="m-3">
      <div className="flex justify-between items-center ">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="text-3xl"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
            }}
          />
        </Link>
        <h1 className="md:text-4xl font-bold flex-auto flex justify-center ">
          Edit Profile.
        </h1>
      </div>

      <div className="flex flex-col items-center my-3 gap-3">
        <img src="/images/user.png" alt="" />
        <h1 className="font-bold text-center lg:text-2xl">Ahmad</h1>
      </div>

      <div className="md:mx-5">
        <form onSubmit={handleSubmit}>
          <div className=" flex flex-col gap-3 md:w-[460px]">
            <div className="flex flex-col gap-3 ">
              <Label>Name</Label>
              <Input tye="text" placeholder="Ahmad Hamad" required />
            </div>
            <div className="flex flex-col gap-3 ">
              <Label>Phone</Label>
              <Input type="number" placeholder="123 456 789 0" required />
            </div>

            <div className=" flex flex-col gap-3">
              <Label>Date of Birth</Label>
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
              <Label>Email</Label>
              <Input tye="email" placeholder="Input Value" required />
            </div>

            <div className="flex flex-col gap-3 ">
              <Label>Disease</Label>
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
          <div className="flex lg:justify-start justify-center gap-1 mt-3">
            <input
              type="reset"
              value="Cancel"
              className="bg-transparent text-black font-semibold rounded-md border w-[180px] hover:bg-custom-blue hover:text-white hover:opacity-105"
            />

            <Button
              type="submit"
              className="bg-custom-blue w-[180px] hover:opacity-90"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientProfile;
