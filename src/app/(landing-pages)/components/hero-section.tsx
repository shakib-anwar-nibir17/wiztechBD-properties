"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Input } from "../../../components";

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const stats = [
    {
      label: "CO-SELLERS IN NETWORK",
      value: "21,500+",
      description: "People who can co-promote",
    },
    {
      label: "EXPECTED BUYERS / MONTH",
      value: "86",
      description: "With zero personal audience",
    },
    {
      label: "EST. MRR AT US$9/MO",
      value: "US$774",
      description: "From membership sales",
    },
    {
      label: "EARN W/O A PRODUCT",
      value: "US$300",
      description: "Just by co-selling",
    },
  ];
  return (
    <section className="min-h-screen bg-primary-800 py-[60px]">
      <div className="mx-auto w-full flex items-center justify-center">
        <span
          style={{
            borderRadius: "100px",
            background: "rgba(27, 22, 38, 0.60)",
          }}
          className="inline-block px-4 py-3 font-silka font-semibold tracking-wider text-white rounded-full"
        >
          BUILD FOR YOU
        </span>
      </div>
      <div>
        <h1
          className="mt-4 text-center text-7xl font-clash-display font-bold"
          style={{
            background: "linear-gradient(93deg, #FFF 17.83%, #A5C5DD 80.08%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
          }}
        >
          Built for Creators. <br /> Powered for Profit{" "}
        </h1>
        <p className="text-white text-center font-silka font-medium max-w-3xl leading-[30px] mb-8 mt-4  mx-auto text-xl">
          Create and sell courses, consulting services, and communities - with
          Zero marketing cost and a built-in sales network.
        </p>
      </div>

      <div>
        {/* Email Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-xl mb-3 mx-auto">
          <div className="relative flex items-center bg-[#3B3B4B] rounded-full  border border-white/10">
            <Input
              type="email"
              placeholder="Enter Your Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-none text-white placeholder:text-[#A6A6A6] focus-visible:ring-0 focus-visible:ring-offset-0 px-4 h-[72px]"
            />
            <Button
              style={{
                background:
                  "linear-gradient(214deg, rgba(105, 63, 255, 0.99) 20.22%, #C02EE5 77.53%)",
              }}
              type="submit"
              className=" text-white rounded-full px-6 h-[72px] flex flex-col items-center"
            >
              <span className="font-semibold">Start for Free</span>
              <span className="text-sm opacity-80">
                No credit card Required
              </span>
            </Button>
          </div>
        </form>
        <p className="text-xs text-white/70 mb-12 text-center ">
          By proceeding you agree to our{" "}
          <Link href="#" className="hover:underline hover:text-white">
            Platform terms
          </Link>{" "}
          &{" "}
          <Link href="#" className="hover:underline hover:text-white">
            Privacy Notice
          </Link>
        </p>
      </div>
    </section>
  );
}
