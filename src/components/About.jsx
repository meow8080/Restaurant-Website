function About() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 fade-in">
      
      <div className="bg-white max-w-3xl w-full p-8 rounded-2xl shadow-lg">
        
        <h1 className="text-4xl font-bold text-amber-950 text-center mb-6">About Our Restaurant</h1>

        <p className="text-black text-lg mb-4 leading-relaxed">
            We are a modern dining restaurant dedicated to serving delicious food
            made with passion and care. Every dish is crafted to deliver rich
            flavors and a memorable experience.
        </p>

        <p className="text-black text-lg mb-4 leading-relaxed">
            Our menu offers a perfect fusion of Indian, Continental, and Seafood
            cuisine, prepared using fresh ingredients and authentic recipes that
            celebrate taste and quality.
        </p>

        <p className="text-black text-lg leading-relaxed">
            Our mission is to create a warm and welcoming space where friends and
            families come together to enjoy great food, exceptional service, and
          unforgettable moments.
        </p>

      </div>

    </div>
  );
}

export default About;