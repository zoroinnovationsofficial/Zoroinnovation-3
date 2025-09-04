import React from "react";

export default function ResourcesDocs() {
  const resources = [
    { title: "Service Brochure", link: "/downloads/service-brochure.pdf" },
    { title: "Case Studies", link: "/case-studies" },
    { title: "FAQs", link: "/faq" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Helpful Resources & Documentation
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Access our library of resources to guide you through our services.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <a
              key={i}
              href={res.link}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:scale-105 transform transition duration-300 block"
            >
              <p className="font-semibold text-orange-500">{res.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
