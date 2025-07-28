import React from 'react';

function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white text-center py-20 px-4">
      <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="text-xl font-normal mb-12 text-orange-100 max-w-3xl mx-auto">
        Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white hover:bg-gray-100 text-orange-600 font-bold py-3 px-6 rounded transition">
          Start Project
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-6 rounded transition">
          Schedule Consultation
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
