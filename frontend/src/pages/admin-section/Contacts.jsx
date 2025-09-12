import React, { useState, useEffect } from "react";
import { getAllMessages, sendContactMessage, getMessageById } from "../../api/contactApi";

// Helper function to find the array of messages in different API response shapes
const normalizeApiResponse = (response) => {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.messages)) return response.messages;
  return []; // Default to an empty array if nothing matches
};

// Helper function to find a single message object
const normalizeMessageObject = (response) => {
  if (response?._id) return response;
  if (response?.data?._id) return response.data;
  if (response?.message?._id) return response.message;
  return null; // Default to null if not found
};

const Contacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "new": return "bg-blue-100 text-blue-800";
      case "read": return "bg-gray-100 text-gray-800";
      case "responded": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Debug localStorage
      console.log("🔍 Checking localStorage...");
      console.log("🔍 accessToken:", localStorage.getItem("accessToken"));
      console.log("🔍 isAuthenticated:", localStorage.getItem("isAuthenticated"));
      console.log("🔍 currentUser:", localStorage.getItem("currentUser"));
      
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Please log in to access admin messages");
        console.warn("❌ No accessToken in localStorage. User must log in.");
        return;
      } else {
        console.log("🔑 accessToken found in localStorage:", token.substring(0, 20) + "...");
      }
      
      console.log("📡 Calling getAllMessages()...");
      const data = await getAllMessages();
      console.log("📡 getAllMessages response:", data);
      
      const normalizedMessages = normalizeApiResponse(data);
      console.log("📡 Normalized messages:", normalizedMessages);
      console.log("📡 Messages count:", normalizedMessages.length);
      
      setMessages(normalizedMessages);
    } catch (err) {
      console.error("❌ Error fetching messages:", err);
      setError(err.message || "Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Refresh messages list
      const refreshedData = await getAllMessages();
      setMessages(normalizeApiResponse(refreshedData));
    } catch (err) {
      setFormError(err.message || "Failed to send message");
      console.error("Error sending message:", err);
    } finally {
      setFormLoading(false);
    }
  };

  const openDetail = async (id) => {
    setShowDetail(true);
    setDetailLoading(true);
    setDetailError(null);
    setSelectedMessage(null);
    try {
      const data = await getMessageById(id);
      const message = normalizeMessageObject(data);
      if (message) {
        setSelectedMessage(message);
      } else {
        setDetailError("Message not found");
      }
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
        <p className="text-white text-lg">Loading messages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
        <p className="text-red-500 text-lg">Error: {error}</p>
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
                    onClick={fetchMessages}
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
            </div>

            {/* Messages List */}
            {messages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="text-gray-500 text-lg mb-2">No messages found</div>
                <p className="text-gray-400">Messages will appear here when users contact you.</p>
              </div>
            ) : (
              <div className="px-6 py-4">
                <div className="text-gray-600 mb-4">
                  Found {messages.length} message(s)
                </div>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message._id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{message.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>
                          {message.status || "new"}
                        </span>
                      </div>
                      <p className="text-blue-600 text-sm mb-1">{message.email}</p>
                      <p className="text-gray-600 text-sm mb-2">{message.subject || "No subject"}</p>
                      <p className="text-gray-700 text-sm">{message.message}</p>
                      <div className="mt-2 text-xs text-gray-500">
                        {message.createdAt ? 
                          new Date(message.createdAt).toLocaleDateString() : 
                          message.date || "N/A"
                        }
                      </div>
                    </div>
                  ))}
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
