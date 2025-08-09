import React from 'react';
import Footer from '../components/loginPage/LoginFooter';

const Contacts = () => {
  const messages = [
    {
      name: "Ethan Carter",
      email: "ethan.carter@email.com",
      subject: "Inquiry about AI Solutions",
      message: "Interested in learning more about AI solutions for business.",
      date: "2024-01-15",
      status: "New",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      name: "Olivia Bennett",
      email: "olivia.bennett@email.com",
      subject: "Feedback on Software",
      message: "Feedback on the latest software update, including suggestions for improvement.",
      date: "2024-01-16",
      status: "Read",
      statusColor: "bg-gray-100 text-gray-800"
    },
    {
      name: "Liam Harper",
      email: "liam.harper@email.com",
      subject: "Support Request",
      message: "Requesting support for a technical issue with the software.",
      date: "2024-01-17",
      status: "Responded",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      name: "Ava Morgan",
      email: "ava.morgan@email.com",
      subject: "General Question",
      message: "General question about the company's services and offerings.",
      date: "2024-01-18",
      status: "Read",
      statusColor: "bg-gray-100 text-gray-800"
    },
    {
      name: "Noah Foster",
      email: "noah.foster@email.com",
      subject: "Partnership Inquiry",
      message: "Inquiry about potential partnership opportunities with the company.",
      date: "2024-01-19",
      status: "New",
      statusColor: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-700 to-red-400 p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                User Messages
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Manage and respond to user inquiries and feedback.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:flex justify-center overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-blue-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages.map((message, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900 text-sm">{message.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-blue-600 text-sm hover:text-blue-800 cursor-pointer">{message.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-blue-600 text-sm hover:text-blue-800 cursor-pointer">{message.subject}</div>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        <div className="text-gray-600 text-sm line-clamp-2">{message.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900 text-sm">{message.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${message.statusColor}`}>
                          {message.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-150">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden px-4 pb-6">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">{message.name}</h3>
                        <p className="text-blue-600 text-sm hover:text-blue-800 cursor-pointer mb-1">{message.email}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${message.statusColor}`}>
                          {message.status}
                        </span>
                        <span className="text-gray-500 text-sm">{message.date}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-blue-600 text-sm font-medium hover:text-blue-800 cursor-pointer mb-2">{message.subject}</p>
                      <p className="text-gray-600 text-sm">{message.message}</p>
                    </div>
                    <div className="flex justify-end">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-150">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contacts;
