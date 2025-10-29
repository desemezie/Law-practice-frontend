function ServicesSection() {
  return (
    <section className="bg-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Core Legal Services
        </h2>
        <div className="w-24 h-1 bg-white mx-auto my-6"></div>

        {/* Service icons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-md hover:bg-blue-700 transition">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Contract Drafting</h3>
            <p className="text-gray-200 text-sm">
              Clear, enforceable agreements tailored to your commercial needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-md hover:bg-blue-700 transition">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-2">Corporate Advisory</h3>
            <p className="text-gray-200 text-sm">
              Expert counsel on mergers, acquisitions, and corporate structuring.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-md hover:bg-blue-700 transition">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
            <p className="text-gray-200 text-sm">
              Strategic legal representation for commercial and contractual disputes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
