import React from "react";

function Blog() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Blog</h1>
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest news, insights, and innovations in the technology world.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog post placeholders */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <p className="text-sm text-[#ff6b35] font-medium mb-2">May 15, 2023</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog Post Title {item}</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="text-[#ff6b35] font-medium hover:text-[#e85a2a] transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-[#ff6b35] text-white font-medium rounded-md hover:bg-[#e85a2a] transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;