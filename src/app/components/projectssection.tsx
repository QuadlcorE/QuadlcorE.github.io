import React from "react";
import styles from "./css/projects.module.css";
import { Card, CardContent } from "@/components/ui/card";
import ImageContent from "./ui/imagecontent";

export default function Projects() {
  return (
    <div className="relative isolate overflow-hidden py-40 sm:py-32 lg:py-64 lg:scroll-py-60"
      style={{
        backgroundImage: 'url(/images/backgrounds/background2.jpeg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      

      {/* Gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent to-black h-full w-full pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black h-full w-full pointer-events-none"></div>

      {/* Content */}
      <div className="flex justify-center items-center h-full font-lemon">
        <h2 className="text-3xl py-10 font-bold tracking-tight text-indigo-100 sm:text-4xl">
          PERSONAL PROJECTS
        </h2>
      </div>

      <Card className={`mx-auto max-w-7xl ${styles.glassy}`}>
        <CardContent>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <ImageContent/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
