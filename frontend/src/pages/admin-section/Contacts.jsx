import React, { useState, useEffect, useReducer } from "react";
import { getAllMessages, sendContactMessage, getMessageById } from "../../api/contactApi";

// --- Helpers (moved outside component) ---
const normalizeApiResponse = (response) => {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.messages)) return response.messages;
  return [];
};

const normalizeMessageObject = (response) => {
  if (response?._id) return response;
  if (response?.data?._id) return response.data;
  if (response?.message?._id) return response.message;
  return null;
};

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "new": return "bg-blue-100 text-blue-800";
    case "read": return "bg-gray-100 text-gray-800";
    case "responded": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

// --- Reducer for State Management ---
const initialState = {
  loading: true,
  error: null,
  messages: [],
  formSubmitting: false,
  formError: null,
  successMessage: null,
  detailLoading: false,
  detailError: null,
  selectedMessage: null,
  showDetail: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, messages: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    
    case 'SUBMIT_INIT':
      return { ...state, formSubmitting: true, formError: null, successMessage: null };
    case 'SUBMIT_SUCCESS':
      // Add new message to the list for optimistic UI
      return { ...state, formSubmitting: false, successMessage: 'Message sent successfully!', messages: [action.payload, ...state.messages] };
    case 'SUBMIT_FAILURE':
      return { ...state, formSubmitting: false, formError: action.payload };

    case 'DETAIL_INIT':
      return { ...state, showDetail: true, detailLoading: true, detailError: null, selectedMessage: null };
    case 'DETAIL_SUCCESS':
      return { ...state, detailLoading: false, selectedMessage: action.payload };
    case 'DETAIL_FAILURE':
      return { ...state, detailLoading: false, detailError: action.payload };
    case 'DETAIL_CLOSE':
      return { ...state, showDetail: false, selectedMessage: null, detailError: null };
      
    default:
      return state;
  }
}

const Contacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [showForm, setShowForm] = useState(false);



  useEffect(() => {
    const fetchMessages = async () => {
      dispatch({ type: 'FETCH_INIT' });
      
      // Debug localStorage
      console.log("🔍 Checking localStorage...");
      console.log("🔍 accessToken:", localStorage.getItem("accessToken"));
      console.log("🔍 isAuthenticated:", localStorage.getItem("isAuthenticated"));
      console.log("🔍 currentUser:", localStorage.getItem("currentUser"));
      
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("❌ No accessToken in localStorage. User must log in.");
        dispatch({ type: 'FETCH_FAILURE', payload: 'Please log in to access admin messages' });
        return;
      } else {
        console.log("🔑 accessToken found in localStorage:", token.substring(0, 20) + "...");
      }
      
      try {
        console.log("📡 Calling getAllMessages()...");
        const data = await getAllMessages();
        console.log("📡 getAllMessages response:", data);
        
        const normalizedMessages = normalizeApiResponse(data);
        console.log("📡 Normalized messages:", normalizedMessages);
        console.log("📡 Messages count:", normalizedMessages.length);
        
        dispatch({ type: 'FETCH_SUCCESS', payload: normalizedMessages });
      } catch (err) {
        console.error("❌ Error fetching messages:", err);
        dispatch({ type: 'FETCH_FAILURE', payload: err.message || "Failed to fetch messages" });
      }
    };

    fetchMessages();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (state.formError) dispatch({ type: 'SUBMIT_INIT' }); // Clear previous error
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      dispatch({ type: 'SUBMIT_FAILURE', payload: "Name, email, and message are required fields" });
      return;
    }

    dispatch({ type: 'SUBMIT_INIT' });
    try {
      // Assuming sendContactMessage returns the newly created message
      const newMessage = await sendContactMessage(formData);
      dispatch({ type: 'SUBMIT_SUCCESS', payload: newMessage });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      dispatch({ type: 'SUBMIT_FAILURE', payload: err.message || "Failed to send message" });
    }
  };

  const openDetail = async (id) => {
    dispatch({ type: 'DETAIL_INIT' });
    try {
      const data = await getMessageById(id);
      const message = normalizeMessageObject(data);
      if (message) {
        dispatch({ type: 'DETAIL_SUCCESS', payload: message });
      } else {
        dispatch({ type: 'DETAIL_FAILURE', payload: 'Message not found' });
      }
    } catch (err) {
      dispatch({ type: 'DETAIL_FAILURE', payload: err.message || "Failed to load message details" });
    }
  };

  const closeDetail = () => dispatch({ type: 'DETAIL_CLOSE' });


  if (state.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
        <p className="text-white text-lg">Loading messages...</p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-400">
        <p className="text-red-500 text-lg">Error: {state.error}</p>
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
                    onClick={() => {
                      dispatch({ type: 'FETCH_INIT' });
                      const token = localStorage.getItem("accessToken");
                      if (!token) {
                        dispatch({ type: 'FETCH_FAILURE', payload: 'Please log in to access admin messages' });
                        return;
                      }
                      getAllMessages()
                        .then(data => {
                          const normalizedMessages = normalizeApiResponse(data);
                          dispatch({ type: 'FETCH_SUCCESS', payload: normalizedMessages });
                        })
                        .catch(err => {
                          console.error("❌ Error fetching messages:", err);
                          dispatch({ type: 'FETCH_FAILURE', payload: err.message || "Failed to fetch messages" });
                        });
                    }}
                    disabled={state.loading}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.loading ? "Refreshing..." : "Refresh"}
                  </button>
                </div>
              </div>

              {/* Success/Error Messages */}
              {state.successMessage && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {state.successMessage}
                </div>
              )}
              {state.formError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Error: {state.formError}
                </div>
              )}
            </div>

            {/* Messages List */}
            {state.messages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="text-gray-500 text-lg mb-2">No messages found</div>
                <p className="text-gray-400">Messages will appear here when users contact you.</p>
              </div>
            ) : (
              <div className="px-6 py-4">
                <div className="text-gray-600 mb-4">
                  Found {state.messages.length} message(s)
                </div>
                
                {/* Table Format */}
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          NAME
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          EMAIL
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SUBJECT
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          MESSAGE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          DATE
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          STATUS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {state.messages.map((message, index) => (
                        <tr key={message._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {message.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                            <a href={`mailto:${message.email}`} className="underline">
                              {message.email}
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                            <a href="#" className="underline" onClick={(e) => e.preventDefault()}>
                              {message.subject || "No subject"}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700 max-w-xs truncate">
                            {message.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {message.createdAt ? 
                              new Date(message.createdAt).toLocaleDateString() : 
                              message.date || "N/A"
                            }
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(message.status)}`}>
                              {message.status || "new"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
