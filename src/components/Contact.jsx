import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Optional: Reset after delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000); // 4 seconds
  };

  return (
    <section id="contact" className="py-20 px-6 bg-transparent text-white">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md shadow-xl rounded-xl p-8 border border-white/10">
        <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
          Contact Me
        </h2>

        {isSubmitted ? (
          <div className="text-center text-lg font-medium text-amber-300">
            Thank you for contacting me! I'll get back to you shortly.
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-400"
                placeholder="Write your message"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
