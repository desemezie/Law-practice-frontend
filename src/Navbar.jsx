



function Navbar() {
  return (


    <nav className="bg-blue-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Left side: logo / firm name */}
        <h2 className="text-xl font-semibold tracking-wide">
          Victor Commercial Law
        </h2>

        {/* Right side: menu items */}
        <ul className="flex space-x-8 text-sm">
          <li className="hover:text-blue-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-300 cursor-pointer">Why Us</li>
          <li className="hover:text-blue-300 cursor-pointer">Services</li>
          <li className="hover:text-blue-300 cursor-pointer">Careers</li>
          <li className="hover:text-blue-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>


  );
}

export default Navbar;
