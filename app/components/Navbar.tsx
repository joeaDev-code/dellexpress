"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const navData = [
  { name: "Accueil", link: "/" },
  { name: "Services", link: "/Services" },
  { name: "À propos de nous", link: "/about" },
];

function Navbar() {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>("");
  const [displayMenu, toggleDisplay] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setCurrent("Accueil");
        break;
      case "/Services":
        setCurrent("Services");
        break;
      case "/about":
        setCurrent("À propos de nous");
        break;
      case '*' :
        setCurrent("");
        break;
      default:
        break;
    }
  }, [pathname, current]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: isScrolled ? -100:0, opacity: 1 }}
        animate={{ y: isScrolled ? 0 : 0, opacity: isScrolled ? [0,1] : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`${
          isScrolled ? "fixed top-0 bg-white shadow-lg" : "relative bg-transparent"
        } w-full px-4 py-4 flex justify-between items-center z-50`}
      >
        <div className="text-lg font-bold text-orange-600">DellEXPRESS</div>

        <ul className="hidden md:flex items-center gap-8">
          {navData.map((item, index) => (
            <Link href={item.link} key={index}>
              <li
                className={`${
                  current === item.name
                    ? "border-t-2 border-orange-600"
                    : "font-light text-zinc-700"
                } font-light hover:border-t-2 hover:border-orange-600 transition-[border]`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <Link href='/ContactUs'>
        <button aria-label="Nous contacter" className="hidden md:flex px-8 py-2 rounded-xl bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          Nous contacter
        </button>
        </Link>

        <button
          className="block md:hidden"
          onClick={() => toggleDisplay(!displayMenu)}
          aria-label={displayMenu ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <FontAwesomeIcon icon={displayMenu ? faXmark : faBars} />
        </button>
      </motion.div>

      {displayMenu && (
        <NavbarResponsive
          displayMenu={displayMenu}
          toggleMenu={toggleDisplay}
        />
      )}
    </>
  );
}

export default Navbar;

const NavbarResponsive = ({
  displayMenu,
  toggleMenu,
}: {
  displayMenu: boolean;
  toggleMenu: (displayMenu: boolean) => void;
}) => {
  const pathname = usePathname();
  const [current, setCurrent] = useState<string>("Accueil");

  useEffect(() => {
    switch (pathname) {
      case "/":
        setCurrent("Accueil");
        break;
      case "/Services":
        setCurrent("Services");
        break;
      case "/about":
        setCurrent("À propos de nous");
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ x: "-100%" }}
        className="md:hidden bg-orange-600/75 fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-end"
      >
        <button
          className="block md:hidden absolute top-1 right-1"
          onClick={() => toggleMenu(!displayMenu)}
          aria-label={displayMenu ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <FontAwesomeIcon icon={displayMenu ? faXmark : faBars} />
        </button>
        <ul className="py-4 px-2 flex justify-between flex-col w-3/4 h-full bg-white items-center gap-4">
          <div className="text-lg font-bold text-orange-600">DellEXPRESS</div>
          <div className="w-full h-96 bg-slate-100 rounded-full flex justify-center flex-col items-center py-8">
            {navData.map((item, index) => (
              <Link href={item.link} key={index}>
                <li
                  className={`${
                    current === item.name
                      ? "font-bold text-orange-100 bg-orange-600"
                      : "font-light text-zinc-800"
                  } px-2 font-light hover:bg-orange-600 rounded-3xl hover:text-white py-2`}

                  onClick={()=>toggleMenu(!displayMenu)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </div>
          <Link href='ContactUS'>
          <button className="flex px-8 py-2 rounded-3xl bg-gradient-to-br from-orange-600 to-orange-800 text-white">
            Nous contacter
          </button>    
          </Link>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};