const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Overpriced Short-Term Housing",
    description:
      "Students pay $1,000+ per month for 2-4 week stays on Airbnb. That's money you shouldn't have to spend alone.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z" />
      </svg>
    ),
    title: "Fragmented, Unreliable Search",
    description:
      "Facebook groups, Reddit threads, word of mouth — piecing together housing from scattered, unverified sources.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "No Way to Match Dates",
    description:
      "Finding someone at the same hospital, during the same weeks is nearly impossible with current tools.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Sketchy Alternatives",
    description:
      "Random landlords with weird rules, no screening, no way to verify who you're living with for weeks.",
  },
];

export default function Problem() {
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Away Rotation Housing is{" "}
            <span className="font-display italic text-blue-accent">Broken</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Every year, thousands of medical students scramble to find housing
            for rotations — overpaying and stressing when they should be
            focused on their career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-900/5 flex items-center justify-center text-blue-accent mb-5 group-hover:bg-blue-accent/10 transition-colors">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
