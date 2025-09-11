import React, { useState, useEffect } from "react";
import { getAllMessages, sendContactMessage, getMessageById } from "../../api/contactApi";

const Contacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Detail modal state
  const [showDetail, setShowDetail] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "read":
        return "bg-gray-100 text-gray-800";
      case "responded":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Check if user is authenticated
        const token = localStorage.getItem("accessToken");
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        
        if (!token || !isAuthenticated) {
          setError("Please log in to access admin messages");
          return;
        }
        
        console.log("🔍 Fetching messages with token:", token ? "✅ Present" : "❌ Missing");
        const data = await getAllMessages();
        
        // Handle different response structures
        if (Array.isArray(data)) {
          setMessages(data);
        } else if (Array.isArray(data?.data)) {
          setMessages(data.data);
        } else if (Array.isArray(data?.messages)) {
          setMessages(data.messages);
        } else {
          setMessages([]);
        }
      } catch (err) {
        console.error("❌ Error fetching messages:", err);
        setError(err.message || "Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (formError) setFormError(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Name, email, and message are required fields");
      return;
    }

    try {
      setFormLoading(true);
      setFormError(null);
      setSuccessMessage(null);
      
      await sendContactMessage(formData);
      
      setSuccessMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Refresh messages list
      const data = await getAllMessages();
      if (Array.isArray(data)) {
        setMessages(data);
      } else if (Array.isArray(data?.data)) {
        setMessages(data.data);
      } else if (Array.isArray(data?.messages)) {
        setMessages(data.messages);
      }
      
    } catch (err) {
      setFormError(err.message || "Failed to send message");
      console.error("Error sending message:", err);
    } finally {
      setFormLoading(false);
    }
  };

  const refreshMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAllMessages();
      if (Array.isArray(data)) {
        setMessages(data);
      } else if (Array.isArray(data?.data)) {
        setMessages(data.data);
      } else if (Array.isArray(data?.messages)) {
        setMessages(data.messages);
      } else {
        setMessages([]);
      }
    } catch (err) {
      setError(err.message || "Failed to refresh messages");
    } finally {
      setLoading(false);
    }
  };

  const openDetail = async (id) => {
    setShowDetail(true);
    setDetailLoading(true);
    setDetailError(null);
    setSelectedMessage(null);
    try {
      const data = await getMessageById(id);
      // Normalize response shapes
      if (data?._id) setSelectedMessage(data);
      else if (data?.data?._id) setSelectedMessage(data.data);
      else if (data?.message?._id) setSelectedMessage(data.message);
      else setDetailError("Message not found");
    } catch (err) {
      setDetailError(err.message || "Failed to load message details");
    } finally {
      setDetailLoading(false);
    }
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedMessage(null);
    setDetailError(null);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
        <p className="text-white text-lg">Loading messages...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-700 to-red-400 p-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    User Messages
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Manage and respond to user inquiries and feedback.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    {showForm ? "Hide Form" : "Add New Message"}
                  </button>
                  <button
                    onClick={refreshMessages}
                    disabled={loading}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Refreshing..." : "Refresh"}
                  </button>
                </div>
              </div>

              {/* Success/Error Messages */}
              {successMessage && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {successMessage}
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Error: {error}
                </div>
              )}

              {/* Contact Form */}
              {showForm && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Send New Message</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter subject (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your message"
                      />
                    </div>
                    {formError && (
                      <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        {formError}
                      </div>
                    )}
                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formLoading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Messages List */}
            {messages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="text-gray-500 text-lg mb-2">No messages found</div>
                <p className="text-gray-400">Messages will appear here when users contact you.</p>
              </div>
            ) : (
              <>
                {/* Desktop Table */}
                <div className="hidden lg:flex justify-center overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {messages.map((message) => (
                        <tr
                          key={message._id}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            {message.name}
                          </td>
                          <td className="px-6 py-4 text-blue-600 cursor-pointer">
                            {message.email}
                          </td>
                          <td className="px-6 py-4 text-blue-600 cursor-pointer">
                            {message.subject || "No subject"}
                          </td>
                          <td className="px-6 py-4 max-w-xs line-clamp-2">
                            {message.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {message.createdAt ? 
                              new Date(message.createdAt).toLocaleDateString() : 
                              message.date || "N/A"
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                message.status
                              )}`}
                            >
                              {message.status || "new"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              onClick={() => openDetail(message._id)}
                              className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100"
                            >
                              View
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
                      <div
                        key={message._id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 text-base mb-1">
                              {message.name}
                            </h3>
                            <p className="text-blue-600 text-sm cursor-pointer mb-1">
                              {message.email}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 mt-2 sm:mt-0">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                message.status
                              )}`}
                            >
                              {message.status || "new"}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {message.createdAt ? 
                                new Date(message.createdAt).toLocaleDateString() : 
                                message.date || "N/A"
                              }
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <p className="text-blue-600 text-sm font-medium cursor-pointer mb-2">
                            {message.subject || "No subject"}
                          </p>
                          <p className="text-gray-600 text-sm">{message.message}</p>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => openDetail(message._id)}
                            className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded hover:bg-blue-100"
                          >
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {/* Detail Modal */}
            {showDetail && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/40" onClick={closeDetail} />
                <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Message Details</h3>
                    <button onClick={closeDetail} className="text-gray-500 hover:text-gray-700">✕</button>
                  </div>
                  {detailLoading ? (
                    <div className="py-8 text-center text-gray-600">Loading...</div>
                  ) : detailError ? (
                    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{detailError}</div>
                  ) : selectedMessage ? (
                    <div className="mt-4 space-y-3">
                      <div>
                        <span className="block text-xs text-gray-500">Name</span>
                        <span className="block text-sm text-gray-900">{selectedMessage.name}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500">Email</span>
                        <span className="block text-sm text-blue-700 break-all">{selectedMessage.email}</span>
                      </div>
                      {selectedMessage.subject && (
                        <div>
                          <span className="block text-xs text-gray-500">Subject</span>
                          <span className="block text-sm text-gray-900">{selectedMessage.subject}</span>
                        </div>
                      )}
                      <div>
                        <span className="block text-xs text-gray-500">Message</span>
                        <span className="block text-sm text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedMessage.status)}`}>
                          {selectedMessage.status || "new"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {(selectedMessage.createdAt && new Date(selectedMessage.createdAt).toLocaleString()) || ""}
                        </span>
                      </div>
                    </div>
                  ) : null}
                  <div className="mt-6 flex justify-end gap-3">
                    <button onClick={closeDetail} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">Close</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
