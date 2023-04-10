function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this section for each testimonial */}
          <div className="bg-white p-8 rounded shadow">
            <img
              src="/images/profile-placeholder.jpg"
              alt="Profile"
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <p className="text-xl font-semibold">John Doe</p>
            <p className="text-gray-500">CEO, Company Name</p>
            <p className="mt-4">
              "Juicebox has helped our company grow exponentially. Their
              platform is easy to use and provides excellent results."
            </p>
          </div>
          {/* End of testimonial */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
