import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Head from "next/head";

export default function Home() {
  return (
    <main
      className="bg-black h-screen w-full pt-60"
    >
      <h1 className="md:text-9xl text-7xl jacquard text-center">ZuIndia</h1>
      <h1 className="md:text-lg text-sm px-5 text-center mt-5 kode">A two-week immersive residency for cypherpunks,
      web3 developers and researchers</h1>
      <h1 className="md:text-lg text-sm px-5 text-center mt-5 kode">In some off-beat village in India | Winter 2024</h1>
      <div className="flex justify-center space-x-5 mt-10">
        <Button className="kode-bold">Apply</Button>
        <Button className="kode-bold" variant="secondary">Join the team</Button>
      </div>
    </main>
  );
}
