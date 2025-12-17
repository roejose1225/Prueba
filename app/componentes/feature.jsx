export default function Feature({ title, description, image, reverse }) {
  return (
    <section
      className={`grid md:grid-cols-2 gap-12 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-500 text-sm mb-4">
          +
        </span>

        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      <img src={image} alt={title} className="rounded-lg" />
    </section>
  );
}