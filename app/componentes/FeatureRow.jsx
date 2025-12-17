export const FeatureRow = ({ title, description, image, isReversed }) => {
  return (
    <section className={`px-8 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className={isReversed ? 'md:order-last' : ''}>
        <div className="w-10 h-10 bg-yellow-400 rounded-full mb-6 flex items-center justify-center text-white font-bold">!</div>
        <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
      <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video relative">
         <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default FeatureRow;