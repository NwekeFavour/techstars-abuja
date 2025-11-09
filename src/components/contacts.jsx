"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Message from "../../public/image/uiw_message.svg"
import Mail from "../../public/image/mage_email.svg"
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Slack,
} from "lucide-react";

export default function Contacts() {
  return (
    <div className="lg:flex gap-6 mx-auto p-5 md:p-6">
      {/* Form Section */}
      <Card className="flex-1 shadow-[0_0_5px_#a1a1a1] md:w-[500px] mx-auto mb-10  w-full lg:w-[785px]">
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[18px]" htmlFor="firstName">First Name</Label>
                <Input className="p-6" id="firstName" placeholder="Enter your first name" />
              </div>

              <div className="space-y-2">
                <Label className="text-[18px]" htmlFor="lastName">Last Name</Label>
                <Input className="p-6" id="lastName" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2 mt-5">
              <Label className="text-[18px]" htmlFor="email">Email Address</Label>
              <Input className="p-6" id="email" type="email" placeholder="Enter your email address" />
            </div>

            <div className="space-y-2 mt-8">
              <Label className="text-[18px]" htmlFor="message">Message</Label>
              <Textarea className="h-[155px]" id="message" placeholder="Enter your message" rows={4} />
            </div>

            <Button className="bg-[#439642] md:px-9 md:py-6 px-5 py-5 hover:bg-green-700 text-white">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Info Section */}
      <Card className="bg-[#439642] mx-auto block text-white justify-between h-[400px]  shadow-md md:w-[472px] py-0 w-full md:h-[568px]">
        <div className="md:p-7 p-3  pt-7 sm:pt-10 md:pt-14"> 
            <CardHeader>
                <CardTitle className="md:text-[22px] md:px-1 text-[14px] font-semibold">
                    Hi! We are always here to help you.
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-4 md:my-7">
            <div className="bg-white/20 p-7 flex items-center rounded-md h-[70px] md:h-[93px] space-x-3">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0c5.342 0 10 4.41 10 9.5c0 5.004-4.553 8.942-10 8.942a11 11 0 0 1-3.43-.546c-.464.45-.623.603-1.608 1.553c-.71.536-1.378.718-1.975.38c-.602-.34-.783-1.002-.66-1.874l.4-2.319C.99 14.002 0 11.842 0 9.5C0 4.41 4.657 0 10 0m0 1.4c-4.586 0-8.6 3.8-8.6 8.1c0 2.045.912 3.928 2.52 5.33l.02.017l.297.258l-.067.39l-.138.804l-.037.214l-.285 1.658a3 3 0 0 0-.03.337v.095q0 .007-.002.008c.007-.01.143-.053.376-.223l2.17-2.106l.414.156a9.6 9.6 0 0 0 3.362.605c4.716 0 8.6-3.36 8.6-7.543c0-4.299-4.014-8.1-8.6-8.1M5.227 7.813a1.5 1.5 0 1 1 0 2.998a1.5 1.5 0 0 1 0-2.998m4.998 0a1.5 1.5 0 1 1 0 2.998a1.5 1.5 0 0 1 0-2.998m4.997 0a1.5 1.5 0 1 1 0 2.998a1.5 1.5 0 0 1 0-2.998"/></svg>            
                </div>
                <div>
                    <p className="sm:text-[16px] text-[12px]  font-semibold">WhatsApp:</p>
                    <p className="sm:text-[16px] text-[12px]">+234 9042512536</p>
                </div>
            </div>

            <div className="bg-white/20 p-7 rounded-md flex items-center space-x-4 h-[70px] md:h-[93px]">
                <div>
                    <img src={Mail} alt="" />
                </div>
                <div>
                    <p className="sm:text-[16px] text-[12px]  font-semibold">Email:</p>
                    <p className="sm:text-[16px] text-[12px]">help@techstars.com</p>
                </div>
            </div>
            </CardContent>
            <Separator className="bg-[#4DCE7C] my-9 h-2 p-0 w-full sm:my-5" />
        </div>
        <div className="md:px-12 px-3">
            <p className="sm:text-[20px] text-[12px] sm:text-start text-center font-bold leading-[30px] mb-2">Connect with us</p>
            <div className="flex items-center sm:justify-start justify-center gap-3 space-x-5 my-3 sm:my-8">
              <a href="#" className="hover:opacity-80"><Linkedin size={18} /></a>
              <a href="#" className="hover:opacity-80"><Facebook size={18} /></a>
              <a href="#" className="hover:opacity-80"><Instagram size={18} /></a>
              <a href="#" className="hover:opacity-80"><Twitter size={18} /></a>
              <a href="#" className="hover:opacity-80"><Slack size={18} /></a>
            </div>
        </div>
      </Card>
    </div>
  );
}
