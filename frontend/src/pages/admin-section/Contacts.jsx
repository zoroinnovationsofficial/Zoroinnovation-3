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
  const [showForm, setShowForm] = useState(false); // UI state can remain useState

  useEffect(() => {
    const fetchMessages = async () => {
      dispatch({ type: 'FETCH_INIT' });
      if (!localStorage.getItem("accessToken")) {
        dispatch({ type: 'FETCH_FAILURE', payload: 'Please log in to access admin messages' });
        return;
      }
      try {
        const data = await getAllMessages();
        dispatch({ type: 'FETCH_SUCCESS', payload: normalizeApiResponse(data) });
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

  if (state.loading) return <div className="flex items-center justify-center min-h-screen"><p className="text-lg">Loading...</p></div>;
  if (state.error) return <div className="flex items-center justify-center min-h-screen"><p className="text-red-500 text-lg">Error: {state.error}</p></div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Page content... you can now use state properties like state.messages, state.formSubmitting, etc. */}
    </div>
  );
};

export default Contacts;
