import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import TechStars from "../../public/image/techstars.svg"

const Header = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Event Schedule", href: "#schedule" },
    { label: "Speakers & Sponsors", href: "#speakers" },
    { label: "News & Updates", href: "#news" },
    { label: "Contact & Community", href: "#contact" },
  ];

  return (
    <header className="w-full z-50 bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link to="/" className="lg:text-[32px] bitcount text-white! md:text-[30px] sm:text-[27px] text-[25px] font-bold">
          <img src={TechStars} className="md:w-[180px] md:h-[66px] w-[100px] h-[37px]" alt="techstars-abuja-logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-400 font-semibold text-[16px] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Register Button (desktop) */}
        <div className="hidden xl:block">
          <Link to={"/auth/login"} className="bg-[#439642] px-5 py-3 hover:bg-white hover:text-[#439642] text-white rounded-md text-sm font-medium">
            Register Now
          </Link>
        </div>

        <div className="xl:hidden block">
        <Sheet>
            <SheetTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800 rounded-md"
            >
                <Menu className="h-[20px]! w-[20px]!" />
            </Button>
            </SheetTrigger>

            <SheetContent
            aria-describedby=""
            side="right"
            className="bg-black text-white border-l border-gray-800 px-6 py-8 flex flex-col justify-between"
            >
                <SheetTitle className="hidden"></SheetTitle>
            {/* Menu Links */}
            <nav className="flex flex-col space-y-5 mt-4">
                {navLinks.map((link) => (
                <SheetClose  asChild key={link.href}>
                    <Link
                    href={link.href}
                    className="text-base tracking-wide hover:text-gray-400 transition-colors font-semibold"
                    >
                    {link.label}
                    </Link>
                </SheetClose>
                ))}

                {/* Register Button */}
                <SheetClose asChild>
                <Link to={"/auth/register"} className="mt-8 flex justify-center hover:bg-white hover:text-[#439642] bg-blue-900 w-full text-white text-base py-3 rounded-lg">
                    Register Now
                </Link>
                </SheetClose>
            </nav>

            {/* Footer */}
            <div className="mt-12 border-t border-gray-800 pt-4 text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} TechStars. All rights reserved.
            </div>
            </SheetContent>
        </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;
