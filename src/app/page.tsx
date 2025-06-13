import QuoteCard from "@/components/QuoteCard";
import Dots from "./Dots";
import { firaCode, youngSerif } from "./Fonts";
import Logo from "./Logo";
import Image from 'next/image';
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutMe from "@/components/AboutMe";
import Contacts from "@/components/Contacts";
import { home, quote } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-grow w-full bg-lightBackground">
      <div className="flex flex-grow md:flex-col w-full max-w-[1300px] mx-auto">
        <div className="flex flex-grow flex-col md:flex-row md:items-center justify-center px-4 py-4 md:h-auto">
          <div className="flex flex-col flex-grow justify-center md:justify-normal">
            <HomeMain></HomeMain>
          </div>
          <div className="flex flex-col ">
            <div>
              <Avinash></Avinash>
              <CurrentWork></CurrentWork>
            </div>
          </div>
        </div>
        <div className="px-6 py-32 pb-24 hidden md:block">
          <div className="flex justify-center">
            <QuoteCard quote={quote.text} author={quote.author}></QuoteCard>
          </div>
        </div>
        <div className="px-6 pb-24 hidden md:block">
          <ProjectsSection></ProjectsSection>
        </div>
        <div className="px-6 pb-24 hidden md:block">
          <SkillsSection></SkillsSection>
        </div>
        <div className="px-6 pb-24 hidden md:block">
          <AboutMe></AboutMe>
        </div>
        <div className="px-6 pb-48 hidden md:block">
          <Contacts></Contacts>
        </div>
      </div>
    </div>
  );
}

function HomeMain() {
  return (
    <div className="flex flex-col gap-5 justify-center ">
      <p
        className={`${youngSerif.className} text-foreground text-2xl sm:text-3xl  leading-15`}
      >
        {home.title.main}
        <br />
        <span>
          <span className="text-primary">{home.title.highlight1}</span>{home.title.continuation}
        </span>
        <br />
        {home.title.line2}
        <br />
        <a className="text-primary">{home.title.highlight2}</a>
      </p>
      <p className={`mt-2 text-secondary sm:text-xl ${firaCode.className}`}>
        {home.subtitle} <br />
        {home.subtitle2}
      </p>
    </div>
  );
}

function Avinash() {
  return (
    <div className="relative flex flex-row flex-grow gap-2 justify-center ">
      <div className="flex relative flex-col justify-end md:justify-center">
        <Image
          src="/avinash.png"
          alt="Avinash"
          width={384}
          height={384}
          className="bottom-0 max-h-96 pl-8 pr-8"
        />
        <div className="absolute left-0 top-20">
          <Logo
            width={120}
            height={120}
            stroke="stroke-primary"
            strokeWidth={0.5}
          ></Logo>
        </div>
        <div className="absolute right-0 bottom-16">
          <Dots width={110} height={110}></Dots>
        </div>
      </div>
    </div>
  );
}

function CurrentWork() {
  return (
    <div className="flex flex-col flex-grow-0">
      <div className="flex border border-secondary items-center gap-2">
        <div className="w-4 h-4 bg-primary flex-shrink-0 ml-2"></div>
        <div className="p-2">
          <p className={`text-secondary ${firaCode.className}`}>
            {home.currentWork.status} <br /> <a className="text-white">{home.currentWork.project}</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
