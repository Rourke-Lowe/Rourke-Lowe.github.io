import { Linkedin, Mail, Instagram } from 'lucide-react';
// Remove Github and Globe since they're not being used

const Navigation = () => {
  return (
    <nav className="w-full px-8 py-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-2xl"></span>

        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="https://www.instagram.com/___rourke___/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/rourke-lowe-125311a5/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:lowe.rourke@gmail.com" 
            className="text-gray-600 hover:text-black transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;