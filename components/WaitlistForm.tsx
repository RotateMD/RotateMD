"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    school: "",
    city: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic email validation
    if (!form.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to join waitlist");
    }
  };

  if (status === "success") {
    return (
      <section
        id="waitlist"
        className="py-24 px-6 bg-navy-900 bg-grid-pattern relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="relative max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-teal-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-teal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            You&apos;re In! 🎉
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            Welcome to the RotateMD waitlist, {form.firstName}.
          </p>
          <p className="text-gray-500">
            We&apos;ll reach out when we launch. Keep an eye on your inbox at{" "}
            <span className="text-blue-light">{form.email}</span>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="py-24 px-6 bg-navy-900 bg-grid-pattern relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be the First to{" "}
            <span className="font-display italic text-blue-light">Know</span>
          </h2>
          <p className="text-lg text-gray-400">
            Join the waitlist for early access. We&apos;re launching soon for
            the upcoming rotation season.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-gray-400 mb-1.5"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-accent/50 focus:ring-1 focus:ring-blue-accent/50 transition-colors"
                placeholder="Alex"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-1.5"
              >
                School Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-accent/50 focus:ring-1 focus:ring-blue-accent/50 transition-colors"
                placeholder="alex@email.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label
                htmlFor="school"
                className="block text-sm text-gray-400 mb-1.5"
              >
                Medical School
              </label>
              <input
                id="school"
                type="text"
                required
                value={form.school}
                onChange={(e) => setForm({ ...form, school: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-accent/50 focus:ring-1 focus:ring-blue-accent/50 transition-colors"
                placeholder="UCLA School of Medicine"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm text-gray-400 mb-1.5"
              >
                Rotation City
              </label>
              <input
                id="city"
                type="text"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-accent/50 focus:ring-1 focus:ring-blue-accent/50 transition-colors"
                placeholder="San Francisco"
              />
            </div>
          </div>

          {errorMsg && (
            <p className="text-red-400 text-sm mb-4">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 rounded-full bg-blue-accent text-white font-semibold text-lg hover:bg-blue-glow hover:shadow-[0_0_30px_rgba(74,155,217,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Joining...
              </span>
            ) : (
              "Join the Waitlist"
            )}
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}
