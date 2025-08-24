import React from 'react';
import Footer from '../../components/admin-section/loginPage/LoginFooter';

const Contacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessageId, setSelectedMessageId] = useState(null);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-gray-100 text-gray-800';
      case 'responded': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await getAllMessages();
        if (Array.isArray(data?.data)) setMessages(data.data);
        else setMessages([]);
      } catch (err) {
        setError(err.message || 'Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
      <p className="text-white text-lg">Loading messages...</p>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
      <p className="text-red-500 text-lg">Error: {error}</p>
    </div>
  );

  if (selectedMessageId) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-700 to-red-400 p-4">
        <div className="flex-grow flex items-center justify-center">
        <MessageDetails
          messageId={selectedMessageId}
          onClose={() => setSelectedMessageId(null)}
          onDeleted={(id) => setMessages(prev => prev.filter(msg => msg._id !== id))}
          onStatusUpdated={(id, newStatus) =>
            setMessages(prev =>
              prev.map(msg =>
                msg._id === id ? { ...msg, status: newStatus } : msg
              )
            )
          }
        />

        </div>
     </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-700 to-red-400 p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            {/* Header */}
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">User Messages</h1>
              <p className="text-gray-600 text-sm sm:text-base">Manage and respond to user inquiries and feedback.</p>
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
                  {messages.map((message) => (
                    <tr key={message._id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">{message.name}</td>
                      <td className="px-6 py-4 text-blue-600 cursor-pointer">{message.email}</td>
                      <td className="px-6 py-4 text-blue-600 cursor-pointer">{message.subject}</td>
                      <td className="px-6 py-4 max-w-xs line-clamp-2">{message.message}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{message.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>{message.status}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedMessageId(message._id)}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-150"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden px-4 pb-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message._id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">{message.name}</h3>
                        <p className="text-blue-600 text-sm cursor-pointer mb-1">{message.email}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-2 sm:mt-0">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>{message.status}</span>
                        <span className="text-gray-500 text-sm">{message.date}</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="text-blue-600 text-sm font-medium cursor-pointer mb-2">{message.subject}</p>
                      <p className="text-gray-600 text-sm">{message.message}</p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setSelectedMessageId(message._id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
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
