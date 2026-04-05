const trustPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Students-Only Network",
    description: "No random landlords or unverified strangers. Only medical students and healthcare trainees.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Smart Date Matching",
    description: "Our algorithm matches you with students who have overlapping dates at the same institution and city.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-14 sm:py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Why{" "}
            <span className="font-display italic text-blue-accent">
              RotateMD
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Built specifically for medical students, by people who understand
            the away rotation experience.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-accent/10 flex items-center justify-center text-blue-accent">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">
                  {point.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
