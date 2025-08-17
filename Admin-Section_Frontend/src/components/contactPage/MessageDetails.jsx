import React, { useEffect, useState } from "react";
import { getMessageById, updateContactStatus, deleteMessage } from "../../api/contactApi";

const MessageDetails = ({ messageId, onClose, onDeleted, onStatusUpdated }) => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null); 

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "new": return "bg-blue-100 text-blue-800";
      case "read": return "bg-gray-100 text-gray-800";
      case "responded": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const data = await getMessageById(messageId);
        setMessage(data?.data || data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessage();
  }, [messageId]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500); 
  };

  const handleStatusChange = async (newStatus) => {
    if (!message) return;
    try {
      setStatusUpdating(true);
      await updateContactStatus(message._id || message.id, { status: newStatus.toLowerCase() });

      
      setMessage({ ...message, status: newStatus.toLowerCase() });

    
      onStatusUpdated &&
        onStatusUpdated(message._id || message.id, newStatus.toLowerCase());

      showToast(`Status updated to "${newStatus}"`, "success");
    } catch (err) {
      showToast(err.message || "Failed to update status", "error");
    } finally {
      setStatusUpdating(false);
    }
  };

  
  const handleDelete = async () => {
    if (!message) return;

    
    showToast("Click DELETE again to confirm", "error");
    if (deleting) return; 

    setDeleting(true);
    setTimeout(async () => {
      try {
        await deleteMessage(message._id || message.id);
        showToast("Message deleted successfully!", "success");
        onDeleted && onDeleted(messageId);
        onClose && onClose();
      } catch (err) {
        showToast(err.message || "Failed to delete message", "error");
      } finally {
        setDeleting(false);
      }
    }, 2500);
  };

  if (loading) return <p className="text-gray-600 text-center">Loading...</p>;
  if (!message) return <p className="text-red-500 text-center">Message not found</p>;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-7xl mx-auto p-6 sm:p-8 my-6 relative">
      
      {/* Toast */}
      {toast && (
        <div
          className={`
            fixed top-25 right-8 px-6 py-3 rounded-lg shadow-lg text-white font-medium
            transition-all transform duration-500 ease-out
            ${toast.type === "success" ? "bg-green-500 shadow-green-500" : "bg-red-500"}
            opacity-100 translate-y-0
          `}
        >
          {toast.message}
        </div>
      )}

      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
        onClick={onClose}
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Details</h2>

      <div className="space-y-3">
        <p><strong>Name:</strong> {message.name}</p>
        <p><strong>Email:</strong> <span className="text-blue-600">{message.email}</span></p>
        <p><strong>Message:</strong></p>
        <textarea
          readOnly
          value={message.message}
          className="w-full h-40 p-3 border border-gray-300 rounded-lg resize-none bg-gray-50 text-gray-900"
        />
        <p><strong>Date:</strong> {message.date}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`ml-2 inline-flex px-2 py-1 text-xs font-medium rounded-full transition-all duration-500 ${getStatusColor(message.status)}`}>
            {message.status}
          </span>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {["new", "read", "responded"].map((status) => {
          const colors = {
            new: "bg-blue-500 hover:bg-blue-600 hover:shadow-blue-500",
            read: "bg-gray-500 hover:bg-gray-600 hover:shadow-gray-500",
            responded: "bg-green-500 hover:bg-green-600 hover:shadow-green-600",
          };
          return (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              disabled={statusUpdating}
              className={`text-white px-4 py-2 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg ${colors[status]}`}
            >
              Mark as {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          );
        })}
        <button
          onClick={handleDelete}
          disabled={statusUpdating}
          className="bg-red-500 text-white px-4 py-2 rounded-lg ml-auto transform transition-all duration-500 hover:scale-105 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MessageDetails;
