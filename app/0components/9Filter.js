"use client";
import Link from "next/link";
import { useState } from "react";

export default function Filter({ option, setOption }) {
  return (
    <div className="w-full text-orange-500 flex text-xl justify-between overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
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
          Dezvoltare peronala
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
  );
}
