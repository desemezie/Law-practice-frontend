function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Victor Commercial Law
          </h2>
          <p className="mb-2">123 Main Street, Toronto, ON</p>
          <p className="mb-2">Mon – Fri: 9am – 5pm</p>
          <p className="mb-2">info@victorlaw.ca</p>
          <p className="mb-4">(416) 555-0123</p>
        </div>

        {/* Right: Appointment Form */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-900">
            Book an Appointment
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Brief description of legal issue"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 md:col-span-2"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white font-medium py-3 rounded-md hover:bg-blue-800 transition md:col-span-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-300 pt-6">
        © 2025 Victor Commercial Law. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
