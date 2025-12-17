export default function CTA() {
  return (
    <section className="bg-orange-500 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-white text-xl font-semibold">
          Got 30 seconds?
        </h3>

        <button className="bg-white text-orange-500 px-6 py-3 rounded-md font-medium
    transition-all duration-200
    hover:bg-orange-100 hover:scale-[1.02]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500
    active:scale-[0.98]

        ">
          Request demo
        </button>
      </div>
    </section>
  );
}