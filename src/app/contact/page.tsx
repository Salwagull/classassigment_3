import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Contact = () => {
  return (
    <section id="contact">
      <Header />

      <div className="bg-[url('/images/bakers4.jpg')] bg-cover bg-center h-screen flex items-center justify-center w-full">
        <div className="bg-[brown] bg-opacity-50 p-10 rounded-lg max-w-lg mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white">Contact Me</h2>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-white
                 bg-transparent text-white placeholder-gray-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-white
                 bg-transparent text-white placeholder-gray-200"
              />
            </div>
            <div>
              <input
                type="Phone number"
                placeholder="Phone Number"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-white
                 bg-transparent text-white placeholder-gray-200"
              />
            </div>
            <div>
              <input
                type="address"
                placeholder="Address"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-white
                 bg-transparent text-white placeholder-gray-200"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-white
                 bg-transparent text-white placeholder-gray-200"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-3 bg-[brown] text-white font-bold rounded-lg hover:bg-white hover:text-[brown]  transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
