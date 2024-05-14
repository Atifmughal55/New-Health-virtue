import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center ">
          <Link className=" flex-initial" onClick={() => navigate(-1)}>
            <FiArrowLeft
              className="p-1"
              style={{
                border: "1px solid gray",
                borderRadius: "100%",
                fontSize: " 32px",
              }}
            />
          </Link>
          <h1 className="md:text-3xl text-xl font-bold flex-auto flex justify-center ">
            My Profile
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 mt-5">
        <img src="images/user.png" alt="" />
        <h1 className="uppercase font-bold md:text-3xl text-2xl">Ahmad</h1>
      </div>
      {/* personal Information */}
      <div className="flex gap-3 flex-col mx-4">
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-[360px] border border-black rounded-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl bg-blue-600 rounded-t-lg px-3">
              Personal Information
            </AccordionTrigger>
            <AccordionContent className="py-1 px-3">
              <div className="">
                <div className="">
                  <p className="text-sm text-gray-400">First Name</p>
                  <h2 className="text-xl font-semibold">Ahmad</h2>
                </div>
                <Separator />
                <div className="">
                  <p className="text-sm text-gray-400">Last Name</p>
                  <h2 className="text-xl font-semibold">Ahmad</h2>
                </div>
                <Separator />
                <div className="">
                  <p className="text-sm text-gray-400">Gender</p>
                  <RadioGroup defaultValue="option-one" className="flex mb-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-three" id="option-two" />
                      <Label htmlFor="option-three">X-Gender</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div className="">
                  <p className="text-sm text-gray-400">Date of Birth</p>
                  <div className=" flex justify-between">
                    <h2 className="text-xl font-semibold">12/Dec/1965</h2>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 14C11.7167 14 11.479 13.904 11.287 13.712C11.095 13.52 10.9993 13.2827 11 13C11 12.7167 11.096 12.479 11.288 12.287C11.48 12.095 11.7173 11.9993 12 12C12.2833 12 12.521 12.096 12.713 12.288C12.905 12.48 13.0007 12.7173 13 13C13 13.2833 12.904 13.521 12.712 13.713C12.52 13.905 12.2827 14.0007 12 14ZM8 14C7.71667 14 7.479 13.904 7.287 13.712C7.095 13.52 6.99934 13.2827 7 13C7 12.7167 7.096 12.479 7.288 12.287C7.48 12.095 7.71734 11.9993 8 12C8.28334 12 8.521 12.096 8.713 12.288C8.905 12.48 9.00067 12.7173 9 13C9 13.2833 8.904 13.521 8.712 13.713C8.52 13.905 8.28267 14.0007 8 14ZM16 14C15.7167 14 15.479 13.904 15.287 13.712C15.095 13.52 14.9993 13.2827 15 13C15 12.7167 15.096 12.479 15.288 12.287C15.48 12.095 15.7173 11.9993 16 12C16.2833 12 16.521 12.096 16.713 12.288C16.905 12.48 17.0007 12.7173 17 13C17 13.2833 16.904 13.521 16.712 13.713C16.52 13.905 16.2827 14.0007 16 14ZM12 18C11.7167 18 11.479 17.904 11.287 17.712C11.095 17.52 10.9993 17.2827 11 17C11 16.7167 11.096 16.479 11.288 16.287C11.48 16.095 11.7173 15.9993 12 16C12.2833 16 12.521 16.096 12.713 16.288C12.905 16.48 13.0007 16.7173 13 17C13 17.2833 12.904 17.521 12.712 17.713C12.52 17.905 12.2827 18.0007 12 18ZM8 18C7.71667 18 7.479 17.904 7.287 17.712C7.095 17.52 6.99934 17.2827 7 17C7 16.7167 7.096 16.479 7.288 16.287C7.48 16.095 7.71734 15.9993 8 16C8.28334 16 8.521 16.096 8.713 16.288C8.905 16.48 9.00067 16.7173 9 17C9 17.2833 8.904 17.521 8.712 17.713C8.52 17.905 8.28267 18.0007 8 18ZM16 18C15.7167 18 15.479 17.904 15.287 17.712C15.095 17.52 14.9993 17.2827 15 17C15 16.7167 15.096 16.479 15.288 16.287C15.48 16.095 15.7173 15.9993 16 16C16.2833 16 16.521 16.096 16.713 16.288C16.905 16.48 17.0007 16.7173 17 17C17 17.2833 16.904 17.521 16.712 17.713C16.52 17.905 16.2827 18.0007 16 18ZM5 22C4.45 22 3.979 21.804 3.587 21.412C3.195 21.02 2.99934 20.5493 3 20V6C3 5.45 3.196 4.979 3.588 4.587C3.98 4.195 4.45067 3.99934 5 4H6V3C6 2.71667 6.096 2.479 6.288 2.287C6.48 2.095 6.71734 1.99934 7 2C7.28334 2 7.521 2.096 7.713 2.288C7.905 2.48 8.00067 2.71734 8 3V4H16V3C16 2.71667 16.096 2.479 16.288 2.287C16.48 2.095 16.7173 1.99934 17 2C17.2833 2 17.521 2.096 17.713 2.288C17.905 2.48 18.0007 2.71734 18 3V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.804 21.021 20.412 21.413C20.02 21.805 19.5493 22.0007 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Contact Information */}
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-[360px] border border-black rounded-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl bg-blue-600 rounded-t-lg px-3">
              Contact Information
            </AccordionTrigger>
            <AccordionContent className="py-1 px-3">
              <div className="">
                <div className="">
                  <p className="text-sm text-gray-400">Email</p>
                  <h2 className="text-xl font-semibold">
                    Email@healthVirtue.com
                  </h2>
                </div>
                <Separator />
                <div className="">
                  <p className="text-sm text-gray-400">Phone No</p>
                  <h2 className="text-xl font-semibold">+123-456-789-0</h2>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

         <div className="flex lg:justify-start justify-center gap-1 mt-2 mx-3">
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
      </div>
    </>
  );
};
