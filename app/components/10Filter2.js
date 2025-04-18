"use client";
import Link from "next/link";
import { useState } from "react";

export default function Filter2({ option, setOption }) {
  const [chosen, setChosen] = useState("All posts");
  const [displayOptions, setDisplayOptions] = useState(false);
  function onClick() {
    setDisplayOptions(!displayOptions);
  }

  return (
    <div className="w-full flex flex-col relative z-10">
      <div className="w-full 2xl:hidden flex items-center justify-between border border-solid border-black/40">
        <p className="text-xl ml-6">{chosen}</p>
        {!displayOptions && (
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
        )}
        {displayOptions && (
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
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        )}
      </div>
      {/* asta este divul care va tine optiunile */}
      {displayOptions && (
        <div className="flex text-xl 2xl:hidden w-full flex-col absolute left-1/2 transform top-full -translate-x-1/2">
          <button
            onClick={() => {
              setOption("all");
              setChosen("All posts");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 border-t-0 hover:text-orange-500/60 border border-solid border-black bg-white flex justify-start"
          >
            All posts
          </button>
          <button
            onClick={() => {
              setOption("psiho");
              setChosen("Psihoterapie");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 border-t-0 flex justify-start hover:text-orange-500/60 border border-solid border-black bg-white hover:text-orange-500/60"
          >
            Psihoterapie
          </button>
          <button
            onClick={() => {
              setOption("neuro");
              setChosen("Neurofeedback");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 border-t-0 flex justify-start hover:text-orange-500/60 border border-solid bg-white  border-black hover:text-orange-500/60"
          >
            Neruofeedback
          </button>
          <button
            onClick={() => {
              setOption("devoltare");
              setChosen("Dezvoltare personala");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 border-t-0 flex justify-start hover:text-orange-500/60 border border-solid bg-white border-black hover:text-orange-500/60"
          >
            Dezvoltare peronala
          </button>
          <button
            onClick={() => {
              setOption("selfTeach");
              setChosen("Self teaching");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 flex border-t-0 justify-start hover:text-orange-500/60 border border-solid bg-white border-black hover:text-orange-500/60"
          >
            Self teaching
          </button>
          <button
            onClick={() => {
              setOption("copii");
              setChosen("Copii");
              setDisplayOptions(false);
            }}
            className="p-6 flex border-t-0 justify-start transition-all ease-in duration-200 hover:text-orange-500/60 border border-solid bg-white border-black hover:text-orange-500/60"
          >
            Copii
          </button>
          <button
            onClick={() => {
              setOption("comunicare");
              setChosen("Comunicare");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 border-t-0 flex justify-start bg-white hover:text-orange-500/60 border border-solid border-black hover:text-orange-500/60"
          >
            Comunicare
          </button>
          <button
            onClick={() => {
              setOption("neruostiine");
              setChosen("Neurostiinte");
              setDisplayOptions(false);
            }}
            className="p-6 transition-all ease-in duration-200 flex justify-start border-t-0 bg-white hover:text-orange-500/60 border border-solid border-black hover:text-orange-500/60"
          >
            Neurostiinte
          </button>
        </div>
      )}

      <div className="hidden w-full text-orange-500 2xl:flex text-xl justify-between overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
        <div className="flex justify-between w-full min-w-[1200px] py-4">
          <button
            onClick={() => {
              setOption("all");
            }}
            className="hover:text-orange-500/60"
          >
            All posts
          </button>
          <button
            onClick={() => {
              setOption("psiho");
            }}
            className="hover:text-orange-500/60"
          >
            Psihoterapie
          </button>
          <button
            onClick={() => {
              setOption("neuro");
            }}
            className="hover:text-orange-500/60"
          >
            Neruofeedback
          </button>
          <button
            onClick={() => {
              setOption("devoltare");
            }}
            className="hover:text-orange-500/60"
          >
            Dezvoltare personala
          </button>
          <button
            onClick={() => {
              setOption("selfTeach");
            }}
            className="hover:text-orange-500/60"
          >
            Self teaching
          </button>
          <button
            onClick={() => {
              setOption("copii");
            }}
            className="hover:text-orange-500/60"
          >
            Copii
          </button>
          <button
            onClick={() => {
              setOption("comunicare");
            }}
            className="hover:text-orange-500/60"
          >
            Comunicare
          </button>
          <button
            onClick={() => {
              setOption("neruostiine");
            }}
            className="hover:text-orange-500/60"
          >
            Neurostiinte
          </button>
        </div>
      </div>
    </div>
  );
}
