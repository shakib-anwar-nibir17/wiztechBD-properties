"use client";

import Image from "next/image";

export default function CalculatorSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#2a0019] py-20">
      {/* Top Gradient Ellipse */}
      <div className="pointer-events-none absolute left-1/2 top-[-334px] size-[517px] -translate-x-1/2">
        <div className="absolute inset-[-49.13%]">
          <Image
            src="/assets/calculator/ellipse-blur.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Gradient Ellipse */}
      <div className="pointer-events-none absolute left-1/2 top-[407px] size-[517px] -translate-x-1/2">
        <div className="absolute inset-[-49.13%]">
          <Image
            src="/assets/calculator/ellipse-blur.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content Card */}
      <div className="relative mx-auto max-w-[1241px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-clip rounded-[40px] border border-[#505152] bg-[rgba(0,0,0,0.2)] p-8 backdrop-blur-sm">
          {/* Header Section */}
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="font-[family-name:var(--font-blauer-neu)] text-[32px] font-semibold leading-normal text-white">
              Sell from day one - even with zero audience
            </h2>
            <button className="flex items-center justify-center gap-2.5 rounded-full border border-white px-5 py-3 text-base font-normal text-white transition-all hover:bg-white hover:text-[#2a0019]">
              Open calculator
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className="mb-12 grid grid-cols-1 gap-[22px] md:grid-cols-3">
            {/* Card 1: Sell on autopilot */}
            <div className="flex flex-col gap-6 rounded-[32px] border border-[#3c3c3c] bg-[#0c0c0c] p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <div className="size-6 rounded-full bg-white" />
                </div>
                <h3 className="font-[family-name:var(--font-silka)] text-xl font-medium leading-[1.5] text-white">
                  Sell on autopilot
                </h3>
              </div>
              <p className="font-[family-name:var(--font-silka)] text-base leading-6 text-white/70">
                Set up your products once and let the system handle everything
                from payments to delivery.
              </p>
            </div>

            {/* Card 2: Earn more with less effort */}
            <div className="flex flex-col gap-6 rounded-[32px] border border-[#3c3c3c] bg-[#0c0c0c] p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <div className="size-6 rounded-full bg-white opacity-50" />
                </div>
                <h3 className="font-[family-name:var(--font-silka)] text-xl font-medium leading-[1.5] text-white">
                  Earn more with less effort
                </h3>
              </div>
              <p className="font-[family-name:var(--font-silka)] text-base leading-6 text-white/70">
                Maximize your revenue while minimizing the time you spend on
                manual tasks.
              </p>
            </div>

            {/* Card 3: Build a lasting business */}
            <div className="flex flex-col gap-6 rounded-[32px] border border-[#3c3c3c] bg-[#0c0c0c] p-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <div className="size-6 rounded-full bg-white opacity-[0.49]" />
                </div>
                <h3 className="font-[family-name:var(--font-silka)] text-xl font-medium leading-[1.5] text-white">
                  Build a lasting business
                </h3>
              </div>
              <p className="font-[family-name:var(--font-silka)] text-base leading-6 text-white/70">
                Create sustainable income streams that grow with you over time.
              </p>
            </div>
          </div>

          {/* Bottom Images */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#579ECE]/20 via-[#ECD6C5]/20 to-[#BB6264]/20">
              <Image
                src="/assets/calculator/frame-1.svg"
                alt="Decorative frame 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#ECD6C5]/20 to-[#BB6264]/20">
              <Image
                src="/assets/calculator/frame-2.svg"
                alt="Decorative frame 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
