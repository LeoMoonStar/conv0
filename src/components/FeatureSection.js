function FeatureSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this section for each feature */}
          <div className="text-center">
            <img
              src="/images/feature-placeholder.jpg"
              alt="Feature"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Feature Title</h3>
            <p className="mt-4">
              Feature description goes here. Explain the benefits and how it
              helps users achieve their goals.
            </p>
          </div>
          {/* End of feature */}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
