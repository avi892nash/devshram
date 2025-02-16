
import { Fira_Code, Young_Serif } from "next/font/google";



export const youngSerif = Young_Serif({
    weight: "400",
    variable : "--font-young-serif",
    preload : true,
    subsets : ["latin"]
  });

export const firaCode = Fira_Code({
    weight: "400",
    variable : "--font-fira-code",
    preload : true
})