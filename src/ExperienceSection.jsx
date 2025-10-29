



function ExperienceSection() {
  return (
    <section className="bg-white py-60 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header text */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Decades of experience in procurement, sourcing and commercial law
        </h2>

        {/* Divider line */}
        <div className="w-24 h-1 bg-blue-900 mx-auto my-6"></div>

        {/* Company cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
          {/* Card 1 */}
          
          <div className="border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition min-h-[350px]">
            <h3 className="text-xl font-semibold text-gray-800">MTN</h3>
            <p className="text-gray-600 mt-2">
              Advised on large-scale procurement and telecommunications contracts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition min-h-[350px]">

            <h3 className="text-xl font-semibold text-gray-800">Ericsson</h3>
            <p className="text-gray-600 mt-2">
              Provided strategic legal counsel for sourcing and licensing agreements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition min-h-[350px]">
            <h3 className="text-xl font-semibold text-gray-800">Airtel</h3>
            <p className="text-gray-600 mt-2">
              Supported cross-border negotiations and infrastructure development contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
