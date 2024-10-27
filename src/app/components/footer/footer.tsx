import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[brown] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
          <div>
            <h3 className="text-lg font-semibold mb-2">SG_Bakers</h3>
            <p className="text-sm">
              SG_Bakers brings you the finest baked goods,
               crafted with love and quality ingredients. Treat yourself to our cakes, cookies, and more!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">123 Baker St, Karachi</p>
            <p className="text-sm">Phone: 03142059172</p>
            <p className="text-sm">Email: info@sgbakers.com</p>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-[white] pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} SG_Bakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
