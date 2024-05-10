import { FiArrowLeft } from "react-icons/fi";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RiEyeCloseLine } from "react-icons/ri";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sign-in");
  };
  return (
    <div className="m-5">
      <div className="flex justify-between items-center  ">
        <Link className="flex-initial" onClick={() => navigate(-1)}>
          <FiArrowLeft
            className="p-1"
            style={{
              border: "1px solid gray",
              borderRadius: "100%",
              fontSize: " 32px"
            }}
          />
        </Link>
        <h1 className="md:text-3xl text-2xl font-bold flex-auto flex justify-center ">
          Sign Up.
        </h1>
      </div>
      <div className=" w-full">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col w-full mx-auto md:w-[360px] gap-4 mt-5"
        >
          <div className="flex flex-col">
            <Label className="mb-2 ">Full Name</Label>
            <Input type="text" placeholder="Your Name Here" required />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2 ">Email Here</Label>
            <Input type="email" placeholder="Contact@gmail.com" required />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2 ">Phone</Label>
            <Input type="number" placeholder="+123 456 789 0" required />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2 ">Date of Birth</Label>
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
          <div className="flex flex-col">
            <Label className="mb-2 ">Gender</Label>

            <Select required>
              <SelectTrigger className="">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="x-gender">X-Gender</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <Label className="mb-2">Disease</Label>
            <Select required>
              <SelectTrigger className="">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="othre">Other </SelectItem>
                <SelectItem value="aids">AIDS </SelectItem>
                <SelectItem value="brodetella">Brodetella </SelectItem>
                <SelectItem value="campylobacteriosis">
                  Campylobacteriosis{" "}
                </SelectItem>
                <SelectItem value="dengue">Dengue </SelectItem>
                <SelectItem value="EbolaVirusDisease">
                  Ebola virus disease{" "}
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
          <div className="flex flex-col">
            <Label className="mb-2 ">Description</Label>
            <Input type="text" placeholder="Short Description" required />
          </div>
          <div className="flex flex-col">
            <Label className="mb-2 ">Password</Label>
            <div className=" flex border items-center justify-around">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
                required
              />
              <i>
                <RiEyeCloseLine
                  className="me-2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </i>
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="mb-2 ">Confirm Password</Label>
            <div className=" flex border items-center justify-around">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="****************"
                className=" border-none focus:outline-none"
                required
              />
              <i>
                <RiEyeCloseLine className="me-2 text-gray-400" />
              </i>
            </div>
          </div>
          <div className="flex gap-2 ms-3">
            <div className="mt-1">
              <Checkbox id="terms" />
            </div>
            <p>
              I agree with the{" "}
              <Link className="text-red-500">Terms & Conditions</Link> and
              <Link to={"/privacy-policy"} className="text-red-500">
                Privacy Policy
              </Link>{" "}
              of Health Virtue.
            </p>
          </div>
          <Button>Sign Up</Button>
        </form>
        <div className="text-center">
          Already Have An Account ?{" "}
          <Link to={"/sign-in"} className="text-blue-700 font-bold">
            Sign In Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
