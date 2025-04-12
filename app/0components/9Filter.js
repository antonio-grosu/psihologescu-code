"use client";
import Link from "next/link";
import { useState } from "react";

export default function Filter({ option, setOption }) {
  return (
    <div className="w-full text-orange-500 flex text-xl justify-between">
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
          setOption("psiho");
        }}
        className="hover:text-orange-500/60"
      >
        Mai multe
      </button>
    </div>
  );
}
