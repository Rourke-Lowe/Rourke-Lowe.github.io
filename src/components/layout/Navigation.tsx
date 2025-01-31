const Navigation = () => {
  return (
    <nav className="w-full px-8 py-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-2xl">Alt</span>
        <div className="hidden md:flex items-center space-x-12">
          <a href="#services" className="text-gray-600 hover:text-black">Services</a>
          <a href="#case-studies" className="text-gray-600 hover:text-black">Case studies</a>
          <a href="#about" className="text-gray-600 hover:text-black">About me</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact us</a>
          <button className="bg-gray-100 px-6 py-3 rounded-full hover:bg-gray-200">
            See my work
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;