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
      if (!localStorage.getItem("accessToken")) {
        setError("Please log in to access admin messages");
        return;
      }
      const data = await getAllMessages();
      setMessages(normalizeApiResponse(data));
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

  if (loading) return <div className="flex items-center justify-center min-h-screen"><p className="text-lg">Loading...</p></div>;
  if (error) return <div className="flex items-center justify-center min-h-screen"><p className="text-red-500 text-lg">Error: {error}</p></div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Page content from your original code */}
    </div>
  );
};

export default Contacts;
