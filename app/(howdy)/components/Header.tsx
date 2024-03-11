import { Button } from "../../../components/ui/button";
import { cn } from "../../../lib/utils";
import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "./Sidebar";

interface HeaderProps {
  showModal: boolean;
  setShowModal: () => void;
  className: string;
  carouselExpansionBlur: boolean;
  projectsOnScreen: boolean;
}

const Header = ({
  showModal,
  setShowModal,
  className,
  carouselExpansionBlur,
  projectsOnScreen,
}: HeaderProps) => {
  const handleContactClick = () => {
    setShowModal();
    // const toBlur = ["header-blur", "folio-blur"];

    // toBlur.map((section) =>
    //   document!.getElementById(section)!.classList.toggle("gotta-blur")
    // );

    // console.log("Modal just got set. ", setShowModal);
  };

  return (
    <div className="flex flex-col z-0 font-sans header-text-outline">
      <div
        className={cn(
          "flex flex-col  max-w-sm md:max-w-md relative",
          className
        )}
      >
        <div
          style={{
            transition: "filter 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
          className={cn("", {
            "blur-none opacity-100":
              !showModal && !(carouselExpansionBlur && projectsOnScreen), // Ensure "blur-none" or the correct initial state class is used
            "blur-sm opacity-20 hover:!blur-0":
              showModal || (carouselExpansionBlur && projectsOnScreen), // Apply the blurred state
          })}
        >
          <h1
            id="home"
            className="text-5xl lg:text-6xl font-semibold text-primary-foreground lg:pb-4 row-name"
          >
            Eamon Travers
          </h1>
          <div className="lg:max-w-sm lg:relative lg:left-2">
            <p className="text-xl lg:text-2xl font-thin text-primary-foreground ">
              Frontend Dev Einsteiger
            </p>
            <p className="text-primary-foreground font-thin lg:relative left-2 text-shiner ">
              <span className="grow-solver">Problem Solver</span>
              <br></br>
              <span className="font-light leading-normal  opacity-80 text-md text-primary-foreground">
                Graduated maths & music tech. Work experience; Digital audio
                engineer, MBA/EMBA programme coordinator, composer & performer.
                <br></br>
                Speed chess addict.
              </span>
            </p>
          </div>
        </div>
        <div className="flex  items-center text-white mt-3 md:relative left-4 gap-x-4">
          <span
            className={cn(
              "flex items-center text-white gap-x-4",
              showModal && "modal-bg-blur"
            )}
          >
            <a target="_blank" href="https://github.com/EamonEarth">
              <Github />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/eamonearth/?hl=en"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              href="https://www.lichess.org/EamonEarth"
              className="object-none"
            >
              <img
                src="/portfolio/lichess.svg"
                alt="lichess logo"
                className="text-white lichess-invert h-7 w-7"
              />
            </a>
          </span>

          <span className="flex items-center gap-x-2 outline rounded-full px-2 py-1">
            <Button
              onClick={handleContactClick}
              className="bg-transparent hover:bg-transparent"
            >
              <Mail />
              <p className="font-semibold text-xs text-primary-foreground/90 ml-2">
                {showModal ? "scrap that" : "get in touch"}
              </p>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
