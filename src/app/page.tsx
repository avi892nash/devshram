import Dots from "./Dots";
import { firaCode, youngSerif } from "./Fonts";
import Header from "./Header";
import Logo from "./Logo";

export default function Home() {
  return (
    <div className="h-dvh h-mobile min-h-screen flex flex-col">
      <Header></Header>
      <div className="flex flex-col flex-grow p-3 bg-background">
        <HomeMain></HomeMain>
        <CurrentWork></CurrentWork>
      </div> 
    </div>
  );
}

function HomeMain() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col flex-grow gap-5 justify-center">
        <p
          className={`${youngSerif.className} text-foreground text-4xl leading-15`}
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
        <p className={`mt-2 text-secondary ${firaCode.className}`}>
          Through shram (श्रम) comes mastery - <br />
          this is the way of devshram
        </p>
      </div>
      <div className="flex flex-col flex-grow gap-2 justify-end mb-6">
        <Logo
          width={120}
          height={120}
          stroke="stroke-primary"
          strokeWidth={0.5}
        ></Logo>
        <div className="flex justify-end">
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
            Currently working on <br /> <a className="text-white">Devshram</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
