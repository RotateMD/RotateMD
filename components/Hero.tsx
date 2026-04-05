"use client";

import { useState, type FormEvent } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleQuickSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: "", email, school: "", city: "" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-navy-900 bg-grid-pattern overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 mb-6 sm:mb-8 animate-fade-in-up opacity-0">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-accent animate-pulse" />
          <span className="text-sm text-gray-200 tracking-wide">
            Exclusively for Medical Students
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-5 sm:mb-6 animate-fade-in-up opacity-0 animation-delay-200">
          Find Your{" "}
          <span className="font-display italic text-blue-light">
            Away Rotation
          </span>{" "}
          Roommate
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
          Connect with fourth-year medical students rotating at the same
          institution. Share housing costs, explore new cities together, and make
          your away rotations unforgettable.
        </p>

        {/* Quick email capture */}
        <div className="animate-fade-in-up opacity-0 animation-delay-600">
          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 text-teal-accent text-lg font-medium">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re on the list! We&apos;ll be in touch.
            </div>
          ) : (
            <>
              <form
                onSubmit={handleQuickSignup}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-blue-accent/50 focus:ring-1 focus:ring-blue-accent/50 transition-colors text-base"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-3.5 rounded-full bg-blue-accent text-white font-semibold text-base hover:bg-blue-glow hover:shadow-[0_0_30px_rgba(74,155,217,0.4)] transition-all duration-300 disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Get Early Access"}
                </button>
              </form>
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Try again.</p>
              )}
              <p className="text-gray-500 text-sm mt-4">
                We&apos;ll only email you when RotateMD is ready.{" "}
                <a href="#waitlist" className="text-blue-light hover:underline">
                  Or fill out the full form below ↓
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
