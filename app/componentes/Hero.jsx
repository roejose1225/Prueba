export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center pt-20">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
          Make room for<br />your biggest ideas.
        </h1>

        <p className="mt-6 text-gray-600">
          Use this handy guide to measure the space for your future Tudelü.
        Then, get your <span className="text-orange-500 font-medium">instant estimate</span>
        </p>
        <div className="display flex items-center mt-6"> 
            
            <p>Need more help?</p>
            <a
            href="#"
            className="inline-block  text-orange-500 font-medium ml-2"
            >
                Contact us →
            </a>
        </div>
      </div>

      <img
        src="/images/firts.jpg"
        alt="Meeting room"
        className="rounded-lg"
      />
    </section>
  );
}