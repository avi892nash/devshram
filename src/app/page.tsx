import Dots from "./Dots";
import { firaCode, youngSerif } from "./Fonts";
import Logo from "./Logo";

export default function Home() {
  return (
    <div className="flex flex-grow md:flex-grow-0 bg-background justify-center">
    <div className="flex flex-col md:flex-row flex-grow md:items-center justify-center p-4">
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
    </div>

  );
}

function HomeMain() {
  return (
      <div className="flex flex-col gap-5 justify-center ">
        <p
          className={`${youngSerif.className} text-foreground text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-15`}
        >
          Where
          <br />
          <span>
            <span className="text-primary">Dev</span>elopers Craft
          </span>
          <br />
          meets dedicated
          <br />
          <a className="text-primary">effort</a>
        </p>
        <p className={`mt-2 text-secondary sm:text-xl ${firaCode.className}`}>
          Through shram (श्रम) comes mastery - <br />
          this is the way of devshram
        </p>
      </div>
  );
}

function Avinash(){
  return (<div className="relative flex flex-row flex-grow gap-2 justify-center ">
        <div className="flex relative flex-col justify-end md:justify-center">
          <img src="/avinash.png" alt="Avinash" className="bottom-0 max-h-96 pl-8 pr-8" />
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
      </div>);
}

function CurrentWork() {
  return (
    <div className="flex flex-col flex-grow-0">
      <div className="flex border border-secondary items-center gap-2">
        <div className="w-4 h-4 bg-primary flex-shrink-0 ml-2"></div>
        <div className="p-2">
          <p className={`text-secondary ${firaCode.className}`}>
            Currently working on <br /> <a className="text-white">Devshram</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
