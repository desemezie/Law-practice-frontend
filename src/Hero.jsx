
function Hero() {
  return (
    <section className="bg-white">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 gap-8">
        {/* Left text section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
            Experienced Commercial Law
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Proven track record and extensive portfolio. 
            <br></br> 
            Call us at <span className="font-semibold text-blue-800">(416) 555-0123</span>
          </p>
          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
            Book Consultation
          </button>
        </div>

        {/* Right image section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="../Assets/victor-portrait.png"
            alt="Victor portrait"
            className="rounded-lg shadow-lg object-cover w-100 h-[500px]"
          />
        </div>



      </div>
    </section>
  );
}

export default Hero;
