"use client";
import Link from "next/link";
import { useState } from "react";

export default function Filter2({ option, setOption }) {
  const [chosen, setChosen] = useState("All posts");
  const [displayOptions, setDisplayOptions] = useState(true);
  function onClick() {
    setDisplayOptions(!displayOptions);
  }

  return (
    <div className="w-full flex flex-col relative z-10">
      <div className="w-full items-center flex justify-between border border-solid border-black/40">
        <p className="text-xl ml-6">{chosen}</p>
        <button className="cursor-pointer p-6" onClick={onClick}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {/* asta este divul care va tine optiunile */}
      {displayOptions && (
        <div className="flex text-xl w-full flex-col absolute left-1/2 transform top-full -translate-x-1/2">
          <button
            onClick={() => {
              setOption("all");
              setChosen("All posts");
            }}
            className="p-6 border-t-0 hover:text-orange-500/60 border border-solid border-black bg-white flex justify-start"
          >
            All posts
          </button>
          <button
            onClick={() => {
              setOption("psiho");
              setChosen("Psihoterapie");
            }}
            className="p-6 border-t-0 flex justify-start hover:text-orange-500/60 border border-solid border-black bg-white hover:text-orange-500/60"
          >
            Psihoterapie
          </button>
          <button
            onClick={() => {
              setOption("neuro");
              setChosen("Neurofeedback");
            }}
            className="p-6 border-t-0 flex justify-start hover:text-orange-500/60 border border-solid bg-white  border-black hover:text-orange-500/60"
          >
            Neruofeedback
          </button>
          <button
            onClick={() => {
              setOption("devoltare");
              setChosen("Dezvoltare personala");
            }}
            className="p-6 border-t-0 flex justify-start hover:text-orange-500/60 border border-solid bg-white border-black hover:text-orange-500/60"
          >
            Dezvoltare peronala
          </button>
          <button
            onClick={() => {
              setOption("selfTeach");
              setChosen("Self teaching");
            }}
            className="p-6 flex border-t-0 justify-start hover:text-orange-500/60 border border-solid bg-white border-black hover:text-orange-500/60"
          >
            Self teaching
          </button>
          <button
            onClick={() => {
              setOption("copii");
              setChosen("Copii");
            }}
            className="p-6 flex border-t-0 justify-start hover:text-orange-500/60 border border-solid bg-white border-black hover:text-orange-500/60"
          >
            Copii
          </button>
          <button
            onClick={() => {
              setOption("comunicare");
              setChosen("Comunicare");
            }}
            className="p-6 border-t-0 flex justify-start bg-white hover:text-orange-500/60 border border-solid border-black hover:text-orange-500/60"
          >
            Comunicare
          </button>
          <button
            onClick={() => {
              setOption("neruostiine");
              setChosen("Neurostiinte");
            }}
            className="p-6 flex justify-start border-t-0 bg-white hover:text-orange-500/60 border border-solid border-black hover:text-orange-500/60"
          >
            Neurostiinte
          </button>
        </div>
      )}
    </div>
  );
}
