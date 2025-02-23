import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { DataStrings } from "@/utils/constants";

export default function TechnologyIcons() {
  return (
    <div className="max-auto max-w-2xl">
            <h2 className="text-3xl py-10 font-bold tracking-tight text-red-100 sm:text-4xl">
              Technologies
            </h2>
            <ul className="justify-center content-center">
              {DataStrings.softwareSkills.map((icon) => {
                return (
                  <TooltipProvider key={icon.skillName}>
                    <Tooltip>
                      <TooltipTrigger>
                        <li className="inline-block p-2 transition-all duration-[0.7s] hover:scale-[1.15]">
                            {icon.svg}
                        </li>
                      </TooltipTrigger>
                      <TooltipContent>
                        <strong>
                            {icon.skillName}
                        </strong>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </ul>
          </div>
  )
}